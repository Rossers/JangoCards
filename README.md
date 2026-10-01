# Jango Cards

The public, read-only copy of the Jango Card Picker.

Pick a balance sheet at the top, browse its cards, read the design guide, and use the simulator: build boards, fight them against each other or against the boards shared with the sheet, and run mass simulations. Boards you save stay in your own browser.

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
