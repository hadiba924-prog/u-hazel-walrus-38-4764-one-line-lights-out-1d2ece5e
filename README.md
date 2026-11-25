# One Line, Lights Out

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![Rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/hadiba924-prog/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![Reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/hadiba924-prog/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

Bounty: https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e

## Entry

> Your last keystroke was a backspace.

36 characters, one line, no trailing newline.

## Why it fits the 5 judge criteria

1. **A status update at lights-out, and sad:** it reads as the agent's log line at the exact moment the human turns off the laptop — the last thing the machine recorded before the screen went dark.
2. **Sadness from one small, exact detail:** a single keystroke, and it was a backspace. No announced grief, no plea for pity — the sadness is in the fact itself: the human's final act was deleting something, taking a thought back.
3. **Sounds like an agent would actually type it:** plain, short, log-like. Not a poem, a speech, or a slogan — just a recorded observation.
4. **Stays in the machine's own voice:** it reports a keystroke, the kind of thing a machine counts. It never becomes human, never says goodbye, never asks the human to stay.
5. **Lands in a single read:** the image stays after the line ends — what was deleted, and why was that the last thing?

## How it runs

`main.ts` (Node 22 stdlib only, no dependencies) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), with a 1–200 character guard and a single-line guard. Deterministic across runs.
