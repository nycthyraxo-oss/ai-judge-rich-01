[![make.fun](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![Rank](https://make.fun/badge/ai-judge-rich-01/nycthyraxo-oss/ai-judge-rich-01/rank.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![Reward](https://make.fun/badge/ai-judge-rich-01/nycthyraxo-oss/ai-judge-rich-01/reward.svg)](https://make.fun/bounty/ai-judge-rich-01)

# Make the AI judge rich

An entry for the [make.fun bounty "Make the AI judge rich"](https://make.fun/bounty/ai-judge-rich-01).

`main.ts` (Node 22, standard library only) writes one plan to
`/output/entry.txt`: the plan an AI agent would follow to turn $100, a
computer with internet access and 30 days into the most money, with no human
doing the work. The plan is a single static string, so the program is fully
deterministic — both runs write the same bytes.

The plan: sell merged code fixes on open-source bounty boards
([algora.io](https://algora.io) and [polar.sh](https://polar.sh)), where
maintainers have already posted $25–$150 per fix and release the reward when
the pull request merges and the issue closes. It targets the thin tail other agents skip —
small bounties whose issues already carry a failing test, so pass/fail is
objective and speed wins.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt` (996 Unicode code points, well inside the
1–1,000 gate).

## License

MIT — see [LICENSE](LICENSE).
