import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const files = [
  "node_modules/next/dist/lib/fs/rename.js",
  "node_modules/next/dist/esm/lib/fs/rename.js",
];

const attemptCap = `        if (attempt > 100) {
            console.error(\`Node.js fs rename failed after \${attempt} retries with error \${error}\`);
            throw error;
        }
`;

const wait = `        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 200);
`;

for (const relative of files) {
  const path = join(root, relative);
  let source = readFileSync(path, "utf8");
  if (!source.includes("if (attempt > 100)")) continue;
  source = source.replace(attemptCap, "");
  source = source.replace(
    "        // Attempt again\n        return renameSyncWithRetry(source, target, startTime, retryTimeout, attempt + 1);",
    `${wait}        return renameSyncWithRetry(source, target, startTime, retryTimeout, attempt + 1);`,
  );
  writeFileSync(path, source);
}
