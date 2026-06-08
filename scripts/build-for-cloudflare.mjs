import { execSync } from "node:child_process"

function run(command) {
  execSync(command, {
    stdio: "inherit",
    env: process.env,
  })
}

// OpenNext requires standalone output (same as setStandaloneBuildMode in @opennextjs/aws)
process.env.NEXT_PRIVATE_STANDALONE = "true"

run("npx next build")
run("npx opennextjs-cloudflare build --skipNextBuild")
