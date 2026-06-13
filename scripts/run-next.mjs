import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import process from "node:process";

if (existsSync(".env")) {
  process.loadEnvFile(".env");
}

const child = spawn(
  process.execPath,
  ["./node_modules/next/dist/bin/next", ...process.argv.slice(2)],
  {
    env: process.env,
    stdio: "inherit",
  },
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 1);
  }
});
