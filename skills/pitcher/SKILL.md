---
name: pitcher
description: Create investor pitch decks using the Sequoia Capital 10-slide framework. Use when designing pitch decks, investor presentations, business plan summaries, or startup funding materials for any venture. Covers Company Purpose, Problem, Solution, Why Now, Market Size, Competition, Product, Business Model, Team, and Financials.
---

# Pitcher — Pitch Deck Generator

Creates investor-ready pitch decks using the Sequoia Capital framework — the gold standard used by top VCs.

## Workflow

1. **Gather business context** — Ask for or extract: business name, industry, stage, target raise (if applicable)
2. **Walk through 10 slides** — Use structured questions from `references/slide-framework.md`
3. **Generate deck content** — Output markdown for each slide
4. **Format for delivery** — Create PDF via pdf-generator skill or export to Notion

## Quick Reference: The 10 Slides

| # | Slide | One-liner |
|---|-------|-----------|
| 1 | Company Purpose | Define the business in one sentence |
| 2 | Problem | Customer pain + current workarounds |
| 3 | Solution | Your value prop + use cases |
| 4 | Why Now | Market timing + enabling trends |
| 5 | Market Size | TAM / SAM / SOM |
| 6 | Competition | Landscape + your advantages |
| 7 | Product | Features, IP, roadmap |
| 8 | Business Model | Revenue, pricing, unit economics |
| 9 | Team | Founders, advisors, "why us" |
| 10 | Financials | P&L, projections, the ask |

## Slide Details

See `references/slide-framework.md` for detailed prompts and examples for each slide.

## Output Modes

**Discovery Mode** — Interactive Q&A to extract information slide-by-slide
**Draft Mode** — Generate full deck from provided context
**Review Mode** — Critique an existing deck against the framework

## Quality Checklist

Before delivering any pitch deck:

- [ ] Company purpose is ONE clear sentence (no "and" chains)
- [ ] Problem is customer-centric, not founder-centric
- [ ] Solution shows value prop, not just features
- [ ] Why Now has concrete trends with dates/data
- [ ] Market size uses real TAM/SAM/SOM calculations
- [ ] Competition shows you understand the landscape
- [ ] Product has clear differentiation
- [ ] Business model math makes sense
- [ ] Team shows relevant experience
- [ ] Financials are realistic, not hockey-stick fantasy

## Anti-Patterns to Avoid

- **"We have no competition"** — Always have competition (status quo counts)
- **Vanity TAM** — Don't claim $1T market if you sell dog waste services
- **Feature soup** — Lead with value, not feature lists
- **Team fluff** — "Passionate entrepreneur" means nothing; show relevant wins
- **Vague financials** — Specifics beat hand-waving

## File Naming

Save generated decks to:
`dashboard/pitch-decks/[business-name]-pitch-deck-YYYY-MM-DD.md`
