# Design-Spezifikationen - IdeenFunke

## Visuelle Identität

### Farbschema
```css
:root {
  --primary: #FF6B35;      /* Warm Orange - "Funke" */
  --primary-light: #FFB088;
  --secondary: #F7931E;     /* Gelb-Orange */
  --accent: #FCE181;        /* Helles Gelb */
  --text-dark: #2C3E50;
  --text-light: #5A6C7D;
  --background: #FAFAFA;
  --white: #FFFFFF;
  --success: #27AE60;
  --info: #3498DB;
}
```

### Typografie
- **Überschriften**: 'Fredoka One' oder 'Quicksand' (Google Fonts) - verspielt aber professionell
- **Fließtext**: System Fonts Stack für beste Lesbarkeit
- **Schriftgrößen**:
  - H1: 2.5rem
  - H2: 2rem  
  - Body: 1.1rem (für gute Lesbarkeit)
  - Klein: 0.9rem

## Layout-Struktur

### Header
- Logo/App-Name links (mit Funken-Icon ✨)
- Kurzer Slogan: "Evidenzbasierte Aktivitäten für jeden Tag"
- Minimalistisch, nicht überladen

### Hauptbereich

#### Altersgruppen-Auswahl
- 4 große, runde Buttons in einer Reihe (auf Mobile: 2x2 Grid)
- Icons für jede Altersgruppe:
  - 0-1: 🍼 Baby-Flasche
  - 1-2: 🧸 Teddybär
  - 2-3: 🎨 Palette
  - 3-6: 🎒 Rucksack
- Aktive Gruppe visuell hervorgehoben (Schatten + Farbwechsel)

#### Aktivitätskarten
- Card-Design mit sanften Schatten
- 3 Spalten auf Desktop, 2 auf Tablet, 1 auf Mobile
- Karten-Inhalt:
  ```
  ┌─────────────────────┐
  │ [Bildungsbereich]   │ <- Farbiges Label
  │                     │
  │ Aktivitätsname      │ <- Fett, größer
  │                     │
  │ Kurzbeschreibung... │ <- 2-3 Zeilen
  │                     │
  │ 🕐 15 Min  📦 Mat.  │ <- Icons + Info
  └─────────────────────┘
  ```

#### "Neue Ideen"-Button
- Prominent platziert unter den Karten
- Animierter Funken-Effekt bei Klick
- Text: "✨ Neue Ideen zeigen"

### Interaktionsdesign

#### Hover-Effekte
- Karten: Leichtes Anheben (transform: translateY(-5px))
- Buttons: Sanfte Farbveränderung
- Links: Unterstreichen bei Hover

#### Animationen
- Fade-in für neue Aktivitätskarten (0.3s)
- Smooth Scroll bei Navigation
- Rotation für "Neue Ideen" Icon beim Klick

#### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## UI-Komponenten

### Button-Styles
```css
.btn-primary {
  background: var(--primary);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.btn-age-group {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
```

### Karten-Design
```css
.activity-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.activity-card:hover {
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
  transform: translateY(-5px);
}
```

## Bildungsbereich-Farbcodierung
- Emotionen: #E74C3C (Rot)
- Ethik: #9B59B6 (Lila)
- Sprache: #3498DB (Blau)
- Bewegung: #27AE60 (Grün)
- Ästhetik: #F39C12 (Orange)
- Natur: #16A085 (Türkis)

## Mobile-First Überlegungen
- Touch-Targets mindestens 44x44px
- Ausreichend Abstand zwischen interaktiven Elementen
- Keine Hover-Only Funktionalität
- Scrolling statt Pagination

## Barrierefreiheit
- Kontrast-Ratio mindestens 4.5:1
- Focus-Indicators deutlich sichtbar
- Alt-Texte für alle Icons
- Semantisches HTML durchgehend

## Loading States
- Skeleton Screens für Karten während Laden
- Spinner für Button-Aktionen
- Smooth Transitions zwischen States

## Error States
- Freundliche Fehlermeldungen
- Illustration (z.B. trauriger Funke)
- Alternative Aktionen anbieten
