# Nade Book

A CS2 smoke and flash lineup book for all nine maps. Pick a map and a side and you get three smokes and three flashes per page, with arrows to page through the rest.

Every lineup has a short clip that plays from where you stand, through the throw, to where it lands. The Stand, Aim and Result tabs follow the clip as it plays; click one to jump there and hold. Slow, Med and Fast set the playback speed. Tap a clip to watch it full size.

**Live site:** https://onchainexpat.github.io/nade-book/

Links can open straight to a page, for example `#dust2/ct` or `#mirage/t`.

## Maps

208 lineups in total.

| Map | T smokes | T flashes | CT smokes | CT flashes |
|---|---|---|---|---|
| Mirage | 12 | 4 | 5 | 4 |
| Dust II | 12 | 6 | 5 | 8 |
| Inferno | 7 | 6 | 6 | 9 |
| Nuke | 9 | 6 | 4 | 3 |
| Ancient | 8 | 5 | 4 | 8 |
| Anubis | 7 | 4 | 4 | 6 |
| Train | 5 | 4 | 2 | 3 |
| Overpass | 8 | 4 | 5 | 4 |
| Vertigo | 4 | 6 | 4 | 7 |

## Credits

Lineups, screenshots and clips come from these videos. Each card links back to the exact moment in the full video.

- CS2 NADES, [CS2 Dust 2 - The Only Smokes You Need to Win](https://youtu.be/NiJ6dj_IgQE)
- CS2 NADES, [CS2 Dust 2: Smokes & Flashes Guide (Updated & Easy Lineups)](https://youtu.be/9ypTCLOi2cE)
- NartOutHere, [CS2 Dust 2 Smokes You NEED to Know in 2026](https://youtu.be/HY85NcZMrAg)
- CS2 NADES, [CS2 Ancient - Smokes That Will Help You Win More CS2](https://youtu.be/F1L1lbrNRNQ)
- NealGuides FPS Tutorials & in-depth Guides, [10 MUST KNOW Smokes For Ancient (2026) - CS2 Ancient Smokes Guide & Tutorial (EASY)](https://youtu.be/uTLr-iemi-A)
- Milosh0vskY, [The BEST Ancient Flashes To WIN Games! (T Side)](https://youtu.be/heWyAWbNfJE)
- GettClutch, [CS2 - 10 Pop Flashes You NEED To Know on Ancient](https://youtu.be/NWjds9XqP7A)
- CS2 NADES, [CS2 Anubis - New Meta Utility By Vitality In 2026](https://youtu.be/7zVJ8Z93HXc)
- CS as fast as possible - FNScence, [ANUBIS as fast as possible - NEW Season 4 (meta nades, strats, utility) | CS2 afap](https://youtu.be/4IethUNA4J0)
- Tigerr, [MUST KNOW Anubis Utility for Free Elo | Anubis Utility Guide](https://youtu.be/g1jYVHvj2w8)
- NealGuides FPS Tutorials & in-depth Guides, [CS2 Inferno Smokes You NEED TO KNOW & *UPDATED IN 2026*](https://youtu.be/QaTvVtDHypw)
- Milosh0vskY, [The BEST Inferno Flashes 2026!](https://youtu.be/nXp08zdy3zc)
- NartOutHere, [CS2 Inferno Smokes You NEED to Know in 2026](https://youtu.be/eljDZdMTPzs)
- CS2 NADES, [CS2 Inferno - Pro-Level Smokes To Dominate In 2026](https://youtu.be/ZgxBySyBpUU)
- Tigerr, [11 MUST KNOW Smokes For Mirage (2025) | CS2 Mirage Smokes Guide](https://youtu.be/Q4Dwg9Z0wZ0)
- GRAPE CS2, [CS2 Mirage Utility Guide – All Essential Smokes, Mollys, Flashes, HEs](https://youtu.be/tk-9WAcn0FA)
- CS2 NADES, [CS2 Nuke Smoke Lineups – Control the Map & Secure Rounds!](https://youtu.be/EvZhubo1pyE)
- CS Tactics, [CS2 Nuke - All ESSENTIAL Smokes for 2025!](https://youtu.be/mORm-3oZVXM)
- CS Tactics, [CS2 Nuke - EVERY Flash you MUST KNOW!](https://youtu.be/Wa3NtkIJ1Fc)
- Dream League Gaming, [Essential Overpass Utility: Smokes, Molotovs & Flashes for T-Side | CS2 (2025)](https://youtu.be/lrKy9nkJOLU)
- Dream League Gaming, [Essential Overpass Utility: Smokes, Molotovs & Flashes for CT-Side | CS2 (2025)](https://youtu.be/K2xpLCNXQ0Q)
- CS Tactics, [CS2 Overpass - The BEST Flashes for SOLO QUEUE!](https://youtu.be/TXV-lTJQtpY)
- Tigerr, [CS2 TRAIN Smokes You MUST Know! | CS2 Train Smokes Guide](https://youtu.be/XO4Mok3yLj4)
- Icysandwich, [CS2 Train - Basic lineups and solo utilty, both sites](https://youtu.be/Y6m94T8ukQo)
- Counter-Stupid, [*NEW* Train Utility Guide - CS2 Tips and Tricks Full video - Smokes, flashes and more!](https://youtu.be/bkIzyrtNocs)
- CS Tactics, [CS2 Vertigo - All Essential Nades for 2026!](https://youtu.be/XFnT-jBD52k)
- teeHoo-, [VERTIGO NADES 2026](https://youtu.be/JF-QOg6lFdA)
- CS2 Kitchen, [CS2 - 10 Must-Know Self POP Flashes For Dust2](https://youtu.be/w0J4eyZ28Kw)

## Editing

The whole book is one file, `public/index.html`. Lineups live in the `LINEUPS` array, screenshots in `public/img/<map>/` and clips in `public/clips/<map>/`. Pushing to `main` rebuilds the site with `scripts/build-pages.mjs` and deploys it through GitHub Actions.
