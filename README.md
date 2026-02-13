Sury Tree Shaking Issue Reproduction

1. Run `pnpm install` and `pnpm exec tsdown`.

2. Observe `dist/simple.mjs` is bloated at 117.41 kB.

3. Rename `_pnpm-workspace.yaml` to `pnpm-workspace.yaml` and run `pnpm install` and `pnpm exec tsdown` again.

4. Observe `dist/simple.mjs` is reduced to 33.19 kB.
