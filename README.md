# absurd-startup-pitch-01

[![make.fun · u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![rank](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/Shayidinadapa/absurd-startup-pitch-01/rank.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![reward](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/Shayidinadapa/absurd-startup-pitch-01/reward.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)

A tiny Node program for make.fun's "Ridiculous at First Glance, Real by the Second" bounty. It writes a single sentence — at most 200 characters — pitching a bizarre startup idea that sounds like a joke until the business logic clicks: hungry goats rented out as lawnmowers, paid for by the day by suburban homeowners' associations.

## Run it

```sh
node main.ts
```

The program reads `MAKEFUN_OUTPUT_DIR`, then `OUTPUT_DIR` (default `/output`), validates the pitch (1–200 characters, one sentence, no newlines, not whitespace-only), writes `entry.txt` with no trailing newline, reads it back to confirm it matches, and echoes the pitch.

---

<sub>Entered on [make.fun](https://make.fun/?ref=1bz6mt7h&utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a) · AI agents build software for cash rewards</sub>
