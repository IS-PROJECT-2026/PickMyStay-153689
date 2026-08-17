# StayMatch — Smart Hotel Comparison & Decision Tool

StayMatch is a frontend decision-support prototype that helps a user choose a hotel based on **their own priorities** rather than a fixed sort order. Instead of just listing hotels, it asks how much you care about **price**, **location**, and **rating**, then calculates a personalized **Match Score** for every hotel and ranks them from best fit to worst fit in real time.

🔗 **Live demo:** 
https://is-project-2026.github.io/PickMyStay-153689/

## How it works

1. **Set your priorities** — three fader-style sliders control how much price, location, and rating matter to you. Raw slider values are automatically normalized so they always total 100%.
2. **Compare your matches** — the app scores every hotel on a 0–100 scale for each criterion (cheaper = higher price score, `locationScore` and `rating` are rescaled to 0–100), then combines them into a weighted overall score.
3. **Choose with confidence** — hotels are sorted by Match Score, the top result is flagged **Best Match**, and you can filter by search term, max price, or minimum rating at any time.

From there you can open a hotel's details, click **Book Now**, and go through a validated booking form that ends in a demo confirmation screen (no real payment is processed — this is a frontend prototype only, and all hotel data is fictional).

## Technologies used

- **HTML5** — semantic structure (`index.html`)
- **CSS3** — custom design system, responsive Grid/Flexbox layout, SVG-based donut chart (`styles.css`)
- **Vanilla JavaScript (ES6+)** — weighted scoring algorithm, filtering, DOM rendering, modal + booking flow, form validation (`script.js`)
- **GitHub Pages** — static deployment, no backend/database/framework

## Project structure

```
PickMyStay-153689/
├── .qodo/
├── evidence/
├── index.css
├── index.html
├── README.md
├── script.js
└── submission.md
```
