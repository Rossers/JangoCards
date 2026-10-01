# Jango Cards

A card browser and fight simulator for **Jango**, a spaceship auto-battler in development.

**Use the tool here: https://rossers.github.io/JangoCards/**

Browse the cards, read the design guide, and fight boards in the simulator: all of it works as soon as the page opens. Making and sharing a sheet of your own is at the end.

[How a fight works](#how-a-fight-works) · [Using the tool](#using-the-tool) · [Make your own sheet](#make-your-own-sheet-optional) · [Share your sheet](#share-your-sheet)

## How a fight works

![Two ships facing each other, fronts in the middle](images/fight.svg)

- **Two ships, two rows each.** The exterior row holds Shields, Armor and weapons; the interior row holds crew and systems. Each row has 4 to 8 card slots, with the hull behind them.
- **Fights play out on their own, with no luck.** The faster ship acts first, and every card slot makes a ship a little slower.
- **Each round,** the two exterior rows take turns, card by card. Then each ship's interior plays out: its crew fight any enemy boarders, defenders first.
- **Attacks hit the frontmost enemy card.** Once a row is empty, they hit the hull. A ship loses when its hull reaches 0.
- **Shields** never die: at 0 they go down, and they recover after a round without damage. **Armor** is a sturdy wall. Shields are weak to Kinetic damage, Armor to Plasma.
- **The Maelstrom** starts at a set round (12 on Alpha Balance) and damages both hulls a little more each round, so every fight ends.

## Using the tool

### Balance sheets

A balance sheet is a complete set of cards with its own pricing rules and design notes. Each sheet tests a different balance idea, so the same card can have different numbers on different sheets. Switch sheets with the sheet name at the top left. **Sheet** shows that sheet's formula: what everything costs.

### Cards

The **Cards** view shows the sheet's cards. The tabs split them by group, the search box finds names, effects and tags, and the filters narrow them by role, damage type, lowest mark and more. **Details** on a card shows everything about it.

| On a card | Means |
|---|---|
| **Exterior / Interior** | The row it goes in, and for exterior cards, whether it sits in front of or behind the Armor. |
| **Role** | Its job: Filler, Support, Scaler, Centerpiece… |
| **Mk I+** | The lowest mark it comes in. Cards upgrade from Mk I to Mk V, and their numbers grow with the mark. |
| **3 kin** | Attack: damage per hit, colored by damage type (Kinetic, Thermal, Electric, Plasma, Radiation). **×2** means two hits each time it fires. |
| **♥ 12** | Health. |
| **Pips** | Ammo (one used each time it fires) and charges (spent by effects). |
| **24/24 BP** | Budget points: what the card is worth against its budget. Green means on budget. |
| **2 cr** | Its price in credits. |
| **Effect** | What it does, and when: Fight Start, On Activate, After Attack… |
| **Tags** | Words other cards refer to: Weapon, Crew, Shields… |
| **Badges** | Where it came from: GDD, New, or the name of the friend who made it. |

### Guide

**Guide** opens the design guide for the current sheet: how card budgets work, what each stat and keyword costs, how card text is written, where cards belong on a ship, and what the simulations have found. It explains why a card has the numbers it has.

### Simulator

**Simulator** has three tabs:

- **Board Builder:** build a ship from the sheet's cards. Tap **+** to add a card; tap a card to move or remove it. **Fill with random** and **Arrange like a player** get you started. Save a board to fight with it.
- **Fight Sim:** pick two boards and watch one fight, step by step, with a log of every hit.
- **Mass Sim:** fight one board against all the others, or against hundreds of random boards, and see how often it wins and which cards did the work.

Sheets can come with boards to fight against, marked "Shared". Boards you save stay in your browser.

## Make your own sheet (optional)

For trying your own balance ideas or cards.

1. Press **Sheet** at the top right. Under **Sheets**, type a name, choose **A copy of this sheet** or **Start empty**, and press **Create sheet**. Your sheet is marked "(yours)" at the top.
2. Under **About this sheet**, put your name in **Made by** and press **Save**. It goes on your sheet and on every card you make.
3. Change whatever you like:
   - **Edit** on a card changes it; **Add card**, above the cards, makes a new one.
   - In **Sheet**, **Formula** sets what everything costs. Then **Auto Apply** rebalances every card to the new prices.
   - **Guide**, then **Edit**, changes the guide's notes and findings.
   - Pick **Not on this sheet** in the filters to see cards from other sheets, and **Add from …** to bring one over.
4. Your sheet is saved in this browser, on this device only, so export it now and then as a backup.

## Share your sheet

**1. Export it.** In **Sheet**, under **Export and share**, press **Export**. A file such as `my-balance-k3x9.json` downloads. Keep it: **Open a sheet file** (in Sheet, under Sheets) loads it back, here or on another device.

**2. Send it in through GitHub.** About five minutes the first time; no GitHub knowledge needed.

1. Make a free account at https://github.com/signup, or sign in.
2. Open the sheets folder: https://github.com/Rossers/JangoCards/tree/main/sheets
3. Press **Add file** (near the top right), then **Upload files**. GitHub says it has made a copy of the project for you (a "fork"). That's expected.
4. Drag your sheet file onto the page, or press **choose your files**.
5. At the bottom, type a short note such as "Sam's balance sheet" and press **Propose changes**.
6. Press **Create pull request**, then **Create pull request** again.

Ross gets a notification. Once he accepts it, your sheet appears on the site for everyone, usually within a couple of minutes. To send a newer version, export again and repeat.

**Or skip GitHub:** send the exported file to Ross however you normally talk, and he'll add it.

## For Ross: adding a sheet

- **A pull request:** check the file under **Files changed**, then **Merge pull request** and **Confirm merge**. The site updates within a couple of minutes.
- **To try one first:** download the file from the pull request and use **Open a sheet file** in the Card Picker. It arrives as a new sheet with its cards set to private.
- **A file someone sent you:** in the sheets folder on GitHub, **Add file**, **Upload files**, **Commit changes**. Or add it to `sheets/` with GitHub Desktop.
- **Your own sheets:** in the Card Picker, mark cards **Public**, tick **Public** on the sheet (Sheet, Public export), press **Export**, and upload the file the same way. A newer export of a sheet replaces the old one.
- **To take a sheet down,** delete its file from `sheets/`.

`index.html` is the Card Picker page (a copy of `docs/brainstorm/card_picker.html` from the Jango repo); `sheets/` holds one file per sheet, and the site lists them all by itself.
