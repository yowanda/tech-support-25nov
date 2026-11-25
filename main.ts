// tech-support-25nov — entry for make.fun "Have You Tried Turning It Off?"
// Writes one original funny tech-support line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set). Deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I've escalated your ticket to our senior team — that's me again, but I'll put on a deeper voice and take it very seriously this time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
