# Jango Cards

The public, read-only copy of the Jango Card Picker: https://rossers.github.io/JangoCards/

Pick a balance sheet at the top, browse its cards, read the design guide, and use the simulator: build boards, fight them against each other or against the boards shared with the sheet, and run mass simulations. Boards you save stay in your own browser.

## Make your own sheet and submit it

1. Open **Sheet**, and under **Sheets** make a sheet of your own: a copy of the sheet you're on, or an empty one. Your sheets are marked "(yours)" and are kept in your browser.
2. On your own sheet you can edit cards and add new ones, change the formula and run **Auto Apply** to rebalance the cards to it, edit the guide's notes (**Guide**, then **Edit**), and bring cards over from other sheets with **Not on this sheet** in the filters.
3. When it's ready, open **Sheet**, then **Export and share**, and press **Export**. Keep the file: it's also your backup, and **Open a sheet file** (under Sheets) loads it back, here or on another device.
4. To submit it, open this repo's [sheets folder](https://github.com/Rossers/JangoCards/tree/main/sheets), choose **Add file**, then **Upload files**, and add your file. You need a free GitHub account. GitHub makes a copy of the repo for you and opens a pull request.
5. Once the pull request is accepted, your sheet appears on the site for everyone.

## Reviewing a submitted sheet

A submission is a pull request that adds one file to `sheets/`. Merging it publishes the sheet on the site. To try it first, download the file from the pull request and use **Open a sheet file** in the Card Picker, which adds it as a new sheet with its cards set to private.

## What's here

- `index.html`: the Card Picker page. Off claude.ai it runs as this public copy and reads the sheets below. It is a copy of `docs/brainstorm/card_picker.html` in the Jango repo; copy it again to update the page.
- `sheets/`: one file per balance sheet, made by the picker's **Export** button. The page finds every `.json` file in this folder by itself.
- `.nojekyll`: tells GitHub Pages to serve the files as they are.

## Adding or updating a sheet

1. In the Card Picker, mark the cards you want to share as **Public**, tick **Public** on the sheet (Sheet, Public export), and press **Export**. It downloads `<sheet id>.json`.
2. Put the file in `sheets/`, replacing the old one if the sheet was exported before. On github.com: open the `sheets` folder, then **Add file**, **Upload files**, and commit.
3. The site updates within a minute or two.

An export holds the sheet's formula, guide notes and sheet notes, its public cards that aren't parked (with their design notes), and its saved boards made only of public cards. Private cards never leave the picker.

To take a sheet down, delete its file from `sheets/`.
