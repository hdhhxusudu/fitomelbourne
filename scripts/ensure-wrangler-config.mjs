import { readFileSync, writeFileSync, existsSync } from "node:fs"
import { join } from "node:path"

const WORKER_NAME =
  process.env.CLOUDFLARE_WORKER_NAME ||
  process.env.WRANGLER_WORKER_NAME ||
  "fitomelbourne"

const projectDir = process.cwd()
const wranglerPath = join(projectDir, "wrangler.jsonc")

function readPackageName() {
  try {
    const pkg = JSON.parse(readFileSync(join(projectDir, "package.json"), "utf8"))
    return typeof pkg.name === "string" ? pkg.name : undefined
  } catch {
    return undefined
  }
}

function readExistingWorkerName() {
  if (!existsSync(wranglerPath)) return undefined
  try {
    const content = readFileSync(wranglerPath, "utf8")
    const match = content.match(/"name"\s*:\s*"([^"]+)"/)
    return match?.[1]
  } catch {
    return undefined
  }
}

const packageName = readPackageName()
const existingName = readExistingWorkerName()
const workerName = WORKER_NAME || existingName || packageName || "fitomelbourne"

const wranglerConfig = {
  $schema: "node_modules/wrangler/config-schema.json",
  main: ".open-next/worker.js",
  name: workerName,
  compatibility_date: "2026-04-15",
  compatibility_flags: ["nodejs_compat", "global_fetch_strictly_public"],
  assets: {
    directory: ".open-next/assets",
    binding: "ASSETS",
  },
  services: [
    {
      binding: "WORKER_SELF_REFERENCE",
      service: workerName,
    },
  ],
  images: {
    binding: "IMAGES",
  },
}

writeFileSync(wranglerPath, `${JSON.stringify(wranglerConfig, null, 2)}\n`, "utf8")

const logPayload = {
  sessionId: "7d78d8",
  runId: process.env.WORKERS_CI_BUILD_UUID || "local",
  hypothesisId: "H5",
  location: "scripts/ensure-wrangler-config.mjs",
  message: "Ensured wrangler config before Cloudflare build/deploy",
  data: {
    workerName,
    serviceBinding: workerName,
    packageName,
    existingName,
    workersCi: process.env.WORKERS_CI === "1",
    branch: process.env.WORKERS_CI_BRANCH,
    commit: process.env.WORKERS_CI_COMMIT_SHA,
    wranglerPath,
  },
  timestamp: Date.now(),
}

console.log("[ensure-wrangler-config]", JSON.stringify(logPayload.data))

// #region agent log
fetch("http://127.0.0.1:7683/ingest/1018fab0-deb8-4fa0-816b-1490666cdb4d", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Debug-Session-Id": "7d78d8",
  },
  body: JSON.stringify(logPayload),
}).catch(() => {})
// #endregion
