# Nade Book

A CS2 smoke and flash lineup book. Pick a map and a side and you get three smokes and three flashes per page, with arrows to page through the rest.

Every lineup has screenshots for where to stand, where to aim and what it does, and they play through on their own (Slow, Med or Fast; Med by default) so you can watch the setup without clicking. Tap any screenshot for full size, or pick a shot to hold on it.

**Live site:** https://onchainexpat.github.io/nade-book/

Links can open straight to a page, for example `#dust2/ct` or `#mirage/t`.

## Maps so far

| Map | T smokes | T flashes | CT smokes | CT flashes |
|---|---|---|---|---|
| Dust II | 12 | 6 | 5 | 8 |
| Mirage | 2 | 3 | 1 | 4 |

## Credits

Lineups and screenshots come from these videos. Each card links back to the exact moment in the clip.

- NadeKing, [30 Mirage Tricks You Didn't Know](https://youtu.be/XNCPkPh8kYI)
- CS2 NADES, [CS2 Dust 2 - The Only Smokes You Need to Win](https://youtu.be/NiJ6dj_IgQE)
- CS2 NADES, [CS2 Dust 2 Smokes & Flashes Guide](https://youtu.be/9ypTCLOi2cE)
- NartOutHere, [CS2 Dust 2 Smokes You NEED to Know in 2026](https://youtu.be/HY85NcZMrAg)
- CS2 Kitchen, [10 Must-Know Self POP Flashes For Dust2](https://youtu.be/w0J4eyZ28Kw)

## Editing

The whole book is one file, `public/index.html`. Lineups live in the `LINEUPS` array and screenshots in `public/img/<map>/`. Pushing to `main` rebuilds the site with `scripts/build-pages.mjs` and deploys it through GitHub Actions.
