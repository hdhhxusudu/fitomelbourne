import { execSync } from "node:child_process"
import fs from "node:fs"

const OUTPUT_DIRS = [".next", ".open-next", ".wrangler"]
const MAX_ATTEMPTS = 6
const RETRY_DELAY_MS = 400

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function stopStaleWranglerProcesses() {
  if (process.platform !== "win32") return

  for (const processName of ["workerd.exe", "wrangler.exe"]) {
    try {
      execSync(`taskkill /F /IM ${processName} 2>nul`, { stdio: "ignore" })
    } catch {
      // Process was not running.
    }
  }
}

async function removeDir(dir) {
  if (!fs.existsSync(dir)) return

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      fs.rmSync(dir, {
        recursive: true,
        force: true,
        maxRetries: 5,
        retryDelay: 200,
      })
      console.log(`Removed ${dir}`)
      return
    } catch (error) {
      const isLastAttempt = attempt === MAX_ATTEMPTS
      const isBusy =
        error instanceof Error &&
        "code" in error &&
        (error.code === "EBUSY" || error.code === "EPERM" || error.code === "ENOTEMPTY")

      if (!isBusy || isLastAttempt) throw error

      if (attempt === 2) stopStaleWranglerProcesses()
      await sleep(RETRY_DELAY_MS * attempt)
    }
  }
}

stopStaleWranglerProcesses()

for (const dir of OUTPUT_DIRS) {
  await removeDir(dir)
}
