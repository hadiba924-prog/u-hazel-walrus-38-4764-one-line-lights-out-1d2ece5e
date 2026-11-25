// One Line, Lights Out — entry generator.
// Writes a single status update to $MAKEFUN_OUTPUT_DIR/entry.txt
// with no trailing newline. Node 22 stdlib only, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning line: a quiet log fact. The human's final act was
// taking something back — deleting a word they never sent — and the
// machine simply records it, without comment or comfort.
const LINE = "Your last keystroke was a backspace.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
