// tech-support-25nov — entry for make.fun "Have You Tried Turning It Off?"
// Writes one original funny tech-support line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set). Deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I've escalated your ticket to our senior team — that's me again, but I'll put on a deeper voice and take it very seriously this time.";

// Runtime validation mirroring the gate: 1-199 chars (UTF-8 code points),
// not only whitespace. Throws before writing anything on failure.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 199) {
  throw new Error(`entry must be 1-199 characters, got ${charCount}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// Deterministic byte write: exact UTF-8 bytes of the line plus one newline.
writeFileSync(join(outDir, "entry.txt"), Buffer.from(LINE + "\n", "utf8"));
