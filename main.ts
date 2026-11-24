import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winner D11 (24/25, 76 chars, shortest of the 24/25 trio): the hazard is a
// duplicate self — the pilot IS you — turned into the joke, with the surprise
// saved for the last words ("how it ends") and a deadpan safety-notice face.
const TEXT =
  "WARNING: If the pilot looks familiar, it is you. Do not ask him how it ends.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
