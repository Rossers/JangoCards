# Jango Cards

The public copy of the Jango Card Picker: **https://rossers.github.io/JangoCards/**

Pick a balance sheet at the top, browse its cards, read the design guide (**Guide**), and try them in the **Simulator**: build boards, fight them against each other or against the boards that come with the sheet, and run many fights at once. You can also make a sheet of your own and send it in.

## Make your own sheet

1. On the site, press **Sheet** at the top right.
2. Scroll down to **Sheets**. Type a name, choose **A copy of this sheet** (to start from the cards you were looking at) or **Start empty**, and press **Create sheet**. Your new sheet is now picked at the top, marked "(yours)".
3. Under **About this sheet**, put your name in **Made by** and press **Save**. Your name goes on the sheet and on every card you make.
4. Change whatever you like:
   - **Edit** on a card changes it. **Add card**, above the cards, makes a new one.
   - In **Sheet**, **Formula** sets what everything costs. After changing it, use **Auto Apply** to rebalance every card to the new prices.
   - **Guide**, then **Edit**, changes the guide's notes and findings.
   - In the filters, pick **Not on this sheet** to see cards from other sheets, and press **Add from …** to bring one over.
5. Your sheet is saved in this browser, on this device only. Export it now and then as a backup (see below).

## Share your sheet

### 1. Export it

Press **Sheet**, scroll to **Export and share**, and press **Export**. A file with a name like `my-balance-k3x9.json` downloads. Keep it: it's your backup, and **Open a sheet file** (in Sheet, under Sheets) loads it back, on this device or any other.

### 2. Send it in through GitHub

About five minutes the first time. You don't need to know anything about GitHub.

1. If you don't have a GitHub account, make a free one at https://github.com/signup, then sign in.
2. Open the sheets folder: https://github.com/Rossers/JangoCards/tree/main/sheets
3. Press **Add file** (near the top right), then **Upload files**. GitHub says you can't change this project directly, so it makes a copy of it for you (a "fork"). That's expected.
4. Drag your sheet file onto the page, or press **choose your files** and pick it.
5. At the bottom, under **Propose changes**, type a short note such as "Sam's balance sheet", then press **Propose changes**.
6. On the next page, press **Create pull request**. Add a message if you like, then press **Create pull request** again.

That's it. Ross gets a notification. Once he accepts it, your sheet appears on the site for everyone, usually within a couple of minutes.

To send a newer version later, export the sheet again and repeat these steps with the new file.

### Or skip GitHub

Send the exported file to Ross however you normally talk (message, email), and he'll add it.

## For Ross: adding a sheet

- **A pull request:** open it on GitHub, check the file under **Files changed**, then press **Merge pull request** and **Confirm merge**. The site updates within a couple of minutes.
- **To try one first:** download the file (in the pull request, **Files changed**, the file's **⋯** menu, **View file**, then the download button), and use **Open a sheet file** in the Card Picker. It arrives as a new sheet with its cards set to private.
- **A file someone sent you:** open the sheets folder on GitHub, then **Add file**, **Upload files**, **Commit changes**. Or copy it into `sheets/` and commit it with GitHub Desktop.
- **Your own sheets:** in the Card Picker, mark the cards to share as **Public**, tick **Public** on the sheet (Sheet, Public export), press **Export**, and upload the file the same way. A newer export of the same sheet replaces the old one.
- **To take a sheet down,** delete its file from `sheets/`.

An export holds the sheet's formula, guide and notes, its cards (from your picker, only the public ones that aren't parked), and its saved boards made only of those cards.

## What's here

- `index.html`: the Card Picker page. Away from claude.ai it runs as this public copy and reads the sheets below. It's a copy of `docs/brainstorm/card_picker.html` from the Jango repo.
- `sheets/`: one file per balance sheet. The site lists every `.json` file in this folder by itself.
- `.nojekyll`: tells GitHub Pages to serve the files as they are.
