# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**IdeenFunke** is a web application for Austrian early childhood educators (Elementarpädagog:innen) that provides evidence-based activity suggestions for different age groups. The app is built with vanilla HTML, CSS, and JavaScript - no frameworks, no build tools.

**Tech Stack:**
- Pure HTML5, CSS3, JavaScript (ES6+)
- Mobile-first responsive design
- No dependencies, no npm, no build process
- Opens directly in browser via `index.html`

**Target Users:** Educators working with children aged 1-6 in Austrian Krippe (nursery), Kindergarten, and Schulvorbereitung (school preparation) settings.

## Architecture

### Code Structure

The application follows a simple three-file architecture:

**1. [index.html](index.html)** - Main HTML structure
- Semantic HTML5 with clear sections
- Three main UI sections: age selection, filters (education areas + themes), activity cards
- All UI elements use data attributes and IDs for JavaScript interaction

**2. [js/data.js](js/data.js)** - Data layer
- Single source of truth: `activities` array with 135+ activity objects
- Configuration objects: `educationAreas`, `themes`, `developmentGoals`
- NO logic, only data definitions

**3. [js/app.js](js/app.js)** - Application logic
- State management via global variables (`currentAgeGroup`, `currentEducationArea`, `currentTheme`)
- Event-driven architecture with filter buttons
- Triple filtering system (age + education area + theme)
- Random selection algorithm for displaying 5 activities

**4. [css/styles.css](css/styles.css)** - Styling
- CSS Custom Properties for theming (all colors defined in `:root`)
- Mobile-first with responsive breakpoints
- Each education area has specific color coding

### Data Flow

```
User clicks age button
  → handleAgeSelection() sets currentAgeGroup
  → Shows filter sections
  → loadActivities() filters by age + education area + theme
  → Displays 5 random activities from filtered set

User clicks "Neue Ideen"
  → loadNewActivities() re-shuffles and displays different 5 activities
```

### Key Data Structure

Every activity object in `js/data.js` follows this schema:

```javascript
{
    id: 96,                                    // Unique number
    title: "Farben mischen",                   // German title
    ageGroup: "kiga",                          // "krippe" | "kiga" | "school" | "babies"
    areas: ["natur"],                          // Array of education areas
    themes: ["farben", "wasser"],              // Optional array of themes
    goals: ["kreativitaet", "kognitiv", "feinmotorik"],  // 2-3 development goals
    materials: ["Wasserfarben", "Becher", "Wasser"],
    duration: "25-30 Min",
    description: "Brief pedagogical rationale",
    shortInstruction: "Concrete step-by-step instruction"
}
```

**IMPORTANT:**
- `ageGroup: "babies"` exists in data but is NOT displayed (historical data only)
- Active age groups: `krippe` (1-3 Jahre), `kiga` (3-5 Jahre), `school` (5-6 Jahre)
- Every activity MUST have 2-3 `goals` from the `developmentGoals` object

## Working with Activities

### Adding New Activities

1. Find the next available ID in `js/data.js` (currently 135+)
2. Choose correct `ageGroup`: `"krippe"`, `"kiga"`, or `"school"`
3. Assign 1-3 `areas` from: `emotionen`, `ethik`, `sprache`, `bewegung`, `gesundheit`, `aesthetik`
4. Optionally add `themes` (see themes object in data.js)
5. **MUST assign 2-3 `goals`** from the 15 development goals
6. Follow the exact object structure above

**Template:**
```javascript
{
    id: 136,
    title: "Neue Aktivität",
    ageGroup: "kiga",
    areas: ["sprache", "emotionen"],
    themes: ["fruehling"],
    goals: ["sozial", "sprache", "emotional"],
    materials: ["Material 1", "Material 2"],
    duration: "20-30 Min",
    description: "Kurze pädagogische Begründung.",
    shortInstruction: "Konkrete Durchführungsanleitung."
}
```

### Modifying Activities

- Use Edit tool for batch updates (can handle 10-20 activities at once)
- ALWAYS preserve the exact object structure
- When editing `goals`, ensure 2-3 valid goal keys are present

## Austrian Education Context

The app is built around the **Österreichischer Bildungsrahmenplan** (Austrian Education Framework):

**6 Bildungsbereiche (Education Areas):**
1. `emotionen` - Emotions and Social Relationships (Red: #E63946)
2. `ethik` - Ethics and Society (Purple: #9B59B6)
3. `sprache` - Language and Communication (Blue: #3498DB)
4. `bewegung` - Movement and Health (Green: #27AE60)
5. `gesundheit` - Health and Wellbeing (Orange: #F39C12)
6. `aesthetik` - Aesthetics and Design (Turquoise: #16A085)

**Development Goals (15 total):**
See `developmentGoals` object in [js/data.js](js/data.js) - includes feinmotorik, grobmotorik, sprache, sozial, kognitiv, kreativitaet, selbststaendig, konzentration, sinne, emotional, mathematik, literacy, natur, musik, bewegung.

## Testing & Development Workflow

### Manual Testing Checklist

Before every commit, verify:
- ✅ Age group buttons work (krippe, kiga, school)
- ✅ Education area filters work
- ✅ Theme filters work
- ✅ Combined filtering (age + area + theme) works correctly
- ✅ "Neue Ideen" button shows different activities
- ✅ No duplicate activities displayed
- ✅ Development goals (🎯 Fördert:) appear on all cards
- ✅ Mobile view in Chrome DevTools

### Opening the App Locally

**Windows:**
```bash
start "" "c:\Users\Babsi\Documents\Master Elementarpädagogik\ideenfunke\index.html"
```

**macOS/Linux:**
```bash
open index.html
```

No build step, no server needed - just open `index.html` in any modern browser.

### Git Workflow

This project uses clean, structured commits:

```bash
git add .
git commit -m "Brief summary

- Detailed change 1
- Detailed change 2

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
git push
```

IMPORTANT: The main branch is `master` (use for PRs and comparisons).

## Design System

All colors are defined as CSS Custom Properties in [css/styles.css](css/styles.css):

```css
:root {
    --primary-color: #FF6B35;      /* Orange - main brand color */
    --primary-dark: #E85D2C;
    --primary-light: #FFE5DC;
    --secondary-color: #4A90E2;
    --text-dark: #2C3E50;
    --border-radius: 12px;
    --shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```

When adding new UI elements, use these variables for consistency.

## Known Limitations

1. **Baby activities (`ageGroup: "babies"`)** exist in data but are intentionally hidden from UI
2. **Random selection** may show repeats if filtered set has fewer than 5 activities
3. **No persistence** - selections reset on page reload (intentional for MVP)
4. **German-only** - all content in German for Austrian educators

## Important Files for Context

- [ENTWICKLUNGSLOG.md](ENTWICKLUNGSLOG.md) - Complete development history with all 6 phases
- [README.md](README.md) - Project motivation and pedagogical background
- [DATA.md](DATA.md) - Original data structure documentation (reference only, actual structure evolved)

## Development Philosophy

This is a **Promptotyping** learning project (method by Christopher Pollin):
- Progressive enhancement approach
- Mobile-first design
- No over-engineering - vanilla JS is sufficient
- Evidence-based activities from 10 years kindergarten practice
- Clean git history with meaningful commits

Future integration planned into larger "PlanEvi" system for Masterarbeit (master's thesis).
