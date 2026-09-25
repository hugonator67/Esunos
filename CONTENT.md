# ESUNOS — text code system

Every editable text box on the site carries a **positional code** in its
`data-ref="…"` attribute (and in the HTML comment next to it). The code tells you
*which page* the text is on and *roughly where* it sits, so you can find any
string fast when editing.

## Format: `[X0000]`

```
[ L 06 08 ]
  │  │  │
  │  │  └── DOWN  — vertical position, 00 (top) … 99 (bottom of the full page)
  │  └───── ACROSS — horizontal position, 00 (left) … 99 (right)
  └──────── PAGE letter
```

**Page letters**

| Letter | Page | File |
|--------|------|------|
| `L` | Landing | `index.html` |
| `I` | Issue | `issue-01.html` |
| `A` | Archive | *(reserved — no archive page exists yet)* |
| `O` | About | `about.html` |

**The two digits** are a coordinate on an imagined grid over the page: the first
pair is how far **across** (left→right), the second pair is how far **down**
(top→bottom of the whole scrollable page). So `[L0608]` is top-left-ish on the
landing page; `[L7692]` is over on the right, near the bottom.

Positions were measured on a 1280px-wide desktop view and are meant for *finding*
things, not pixel-perfect truth. Where two boxes landed on the exact same cell,
the lower one was nudged down by one (`+01`) to keep every code unique.

**Head items:** the page `<title>` is always `[X0000]` and the meta description
is `[X0001]`.

**Not coded:** logos and buttons/CTAs (Subscribe, Get the next issue, Read the
issue) carry no code — by design.

## Finding a string

Search the code in the HTML — with or without brackets, both work:

```bash
grep -n "L0608" index.html
```

It appears twice on the element: once in the comment, once in `data-ref`.

## The tracker

**`CODES.xlsx`** (and the same data as **`CODES.csv`**) lists every code with its
page, position, element type and current text — plus an empty **“New text”**
column. To change wording, type the new copy into that column (or just tell me
“`[L0608]` → *new headline*”) and it gets applied to the markup.

*The old two-letter reference codes (NV002, HE001, …) have been fully replaced by
this positional system.*
