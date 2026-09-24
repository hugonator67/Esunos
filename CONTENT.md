# ESUNOS — Content reference map

Every editable text box on the page carries a **reference code** in a
`data-ref="…"` attribute (and an adjacent HTML comment). To change any wording,
tell the editor the code — e.g. *"update DP011"* or *"NW021 should be 'The Guide
to Water'"* — and it can be found instantly with a search for that code in
`index.html`.

- **Source** column: `sketch` = copy taken verbatim from your Website Sketch;
  `placeholder` = intentional stand-in you'll replace; `new` = copy I added that
  was **not** in the sketch (flagged for your approval).
- All copy is **draft** and none of it is final — the codes exist so you can edit
  freely later.

Find a code in the markup:

```bash
grep -n 'data-ref="DP011"' index.html
```

## Meta / SEO
| Code | Current text | Source |
|------|--------------|--------|
| MT001 | ESUNOS — The Guide to Infrastructure *(page title)* | new |
| MT002 | Meta description *(A newsletter about the built world's…)* | sketch/new |

## Utility bar
| Code | Current text | Source |
|------|--------------|--------|
| UB001 | ESUNOS · A Network of Newsletters | sketch |
| UB002 | Issue 01 — September 2026 | sketch |

## Header / navigation
| Code | Current text | Source |
|------|--------------|--------|
| NV001 | ESUNOS *(logo image — assets/logo.png)* | supplied logo |
| NV003 | Archive *(→ #dispatches)* | sketch |
| NV004 | About *(→ #network)* | sketch |
| NV005 | Subscribe *(→ #subscribe)* | sketch |

## Hero
| Code | Current text | Source |
|------|--------------|--------|
| HE001 | The ESUNOS Guide to Infrastructure | sketch |
| HE002 | Infrastructure, styled to be seen. | sketch |
| HE003 | A newsletter about the built world's loud, load-bearing beauty — the substations, spans and server halls that would rather be noticed than hidden. | sketch |
| HE004 | you@example.com *(input placeholder)* | sketch |
| HE005 | Get the next issue *(button)* | sketch |
| HE006 | Free. One issue a fortnight. Unsubscribe whenever. | sketch |

## Featured issue
| Code | Current text | Source |
|------|--------------|--------|
| FE001 | Featured — Issue 01 | sketch |
| FE002 | [ Photograph: the Battersea substation at dusk ] *(caption)* | sketch |
| FE003 | Why the substation became a landmark | sketch |
| FE004 | Power infrastructure spent a century apologising for itself… | sketch |
| FE005 | Read the issue *(button)* | sketch |
| FE006 | by Hugo Sale · 11 min read | sketch |

## In this issue (right rail)
| Code | Current text | Source |
|------|--------------|--------|
| II001 | In this issue | sketch |
| II002 | The substation that wanted to be a landmark | sketch |
| II003 | Field notes: the honest pipe | sketch |
| II004 | Five bridges that show their working | sketch |
| II005 | The server hall as cathedral | sketch |
| II006 | Reader mailbag: your loudest local build | sketch |

## Stat box
| Code | Current text | Source |
|------|--------------|--------|
| SB001 | The number | sketch |
| SB002 | 4,300 | sketch |
| SB003 | substations in Greater London. We have opinions about roughly nine of them. | sketch |

## Recent dispatches
| Code | Current text | Source |
|------|--------------|--------|
| RD001 | Recent dispatches | sketch |
| RD002 | Browse the archive → | sketch |
| RD010 | Grid *(kicker)* | sketch |
| RD011 | The pylon that got a paint job and a fan club | sketch |
| RD012 | Aug 24 · 6 min | sketch |
| RD020 | Water *(kicker)* | sketch |
| RD021 | In defence of the visible drainpipe | sketch |
| RD022 | Aug 10 · 7 min | sketch |
| RD030 | Transit *(kicker)* | sketch |
| RD031 | A ventilation shaft with a sense of occasion | sketch |
| RD032 | Jul 27 · 9 min | sketch |
| RD040 | Data *(kicker)* | sketch |
| RD041 | Server halls are the new industrial sublime | sketch |
| RD042 | Jul 13 · 8 min | sketch |
| RD050 | Roads *(kicker)* | sketch |
| RD051 | The gantry as public sculpture | sketch |
| RD052 | Jun 29 · 5 min | sketch |
| RD060 | Field notes *(kicker)* | sketch |
| RD061 | Reading a city by its manhole covers | sketch |
| RD062 | Jun 15 · 6 min | sketch |

## Network band
| Code | Current text | Source |
|------|--------------|--------|
| NW001 | ESUNOS is a network | sketch |
| NW002 | One masthead, many guides. Infrastructure is the first — more are in the works. | sketch |
| NW010 | Live now *(status)* | sketch |
| NW011 | The Guide to Infrastructure | sketch |
| NW012 | The built world, at full volume. | sketch |
| NW020 | Coming soon *(status)* | sketch |
| NW021 | The Guide to [ NW021 ] *(placeholder title — replace)* | placeholder |
| NW022 | Your next title goes here. | placeholder |
| NW030 | Coming soon *(status)* | sketch |
| NW031 | The Guide to [ NW031 ] *(placeholder title — replace)* | placeholder |
| NW032 | Pitch us at hello@esunos.com. | sketch |

## Closing subscribe band  *(NEW — not in the sketch; added per audit item 3)*
| Code | Current text | Source |
|------|--------------|--------|
| CS001 | Subscribe | new |
| CS002 | Get the next issue of the Guide to Infrastructure. | new |
| CS003 | you@example.com *(input placeholder)* | new |
| CS004 | Get the next issue *(button)* | new |
| CS005 | Free. One issue a fortnight. Unsubscribe whenever. | new |

## Footer
| Code | Current text | Source |
|------|--------------|--------|
| FT001 | Infrastructure, styled to be seen. A fortnightly field guide to the built world. | sketch |
| FT002 | Read *(column heading)* | sketch |
| FT003 | Latest issue | sketch |
| FT004 | Archive | sketch |
| FT006 | Elsewhere *(column heading)* | sketch |
| FT007 | Newsletter | sketch |
| FT008 | Instagram | sketch |
| FT009 | Contact | sketch |
| FT010 | © 2026 ESUNOS | sketch |
| FT011 | esunos.com | sketch |
