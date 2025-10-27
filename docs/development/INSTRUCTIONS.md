# Implementierungsanweisungen - IdeenFunke

## Phase 1: Grundstruktur (MVP)

### Schritt 1: HTML-Grundgerüst
1. Erstelle `index.html` mit semantischem HTML5
2. Implementiere:
   - Header mit App-Namen und Kurzbeschreibung
   - Altersgruppen-Auswahl (4 Buttons)
   - Container für Aktivitätskarten
   - "Neue Ideen" Button
   - Footer mit Credits

### Schritt 2: CSS-Styling
1. Erstelle `styles.css` mit:
   - Mobile-first Ansatz
   - CSS Grid für Kartenlayout
   - Farbschema: Warm, einladend (Orange/Gelb-Töne für "Funke")
   - Große, gut lesbare Schrift
   - Hover-Effekte für Interaktivität

### Schritt 3: JavaScript-Grundfunktionalität
1. Erstelle `app.js` mit:
   - Aktivitäten-Array (Daten aus DATA.md)
   - Funktion zur Altersgruppen-Filterung
   - Zufallsauswahl von 3-5 Aktivitäten
   - DOM-Manipulation für Kartenanzeige
   - Event-Listener für Buttons

### Schritt 4: Aktivitätskarten
1. Implementiere Kartendarstellung mit:
   - Titel (hervorgehoben)
   - Kurzbeschreibung
   - Material-Liste (als Tags)
   - Zeitdauer (Icon + Text)
   - Bildungsbereich (farbcodiert)

## Phase 2: Erweiterte Features

### Schritt 5: Bildungsbereich-Filter
1. Füge Checkbox-Filter hinzu
2. Implementiere Mehrfachauswahl
3. Kombiniere mit Altersfilter

### Schritt 6: Detailansicht
1. Modal oder erweiterbarer Kartenbereich
2. Zeige vollständige Aktivitätsinformationen
3. Schließen-Button bzw. Click-outside-to-close

### Schritt 7: LocalStorage
1. Speichere zuletzt gewählte Altersgruppe
2. Optional: Favoriten-Funktion

## Phase 3: Optimierung

### Schritt 8: Performance
1. Lazy Loading für Detailinformationen
2. Minimierung von CSS/JS
3. Optimierte Bilder (falls später hinzugefügt)

### Schritt 9: Barrierefreiheit
1. ARIA-Labels hinzufügen
2. Keyboard-Navigation ermöglichen
3. Screenreader-Unterstützung

### Schritt 10: PWA-Features (Optional)
1. Service Worker für Offline-Funktionalität
2. App-Manifest für "Installation"
3. Cache-Strategie implementieren

## Dateistruktur
```
ideenfunke/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── data.js (Aktivitäten-Datenbank)
├── assets/
│   └── icons/ (optional)
└── docs/
    ├── README.md
    ├── REQUIREMENTS.md
    ├── DATA.md
    └── INSTRUCTIONS.md
```

## Entwicklungsreihenfolge
1. **Tag 1**: HTML + Basic CSS (Schritt 1-2)
2. **Tag 2**: JavaScript Grundfunktionen (Schritt 3-4)
3. **Tag 3**: Erweiterte Filter (Schritt 5-6)
4. **Tag 4**: Testing & Optimierung
5. **Tag 5**: Deployment auf GitHub Pages

## Testing-Checkliste
- [ ] Funktioniert auf Mobile (320px Breite)
- [ ] Funktioniert auf Tablet
- [ ] Funktioniert auf Desktop
- [ ] Alle Altersgruppen zeigen Aktivitäten
- [ ] "Neue Ideen" generiert andere Aktivitäten
- [ ] Keine JavaScript-Fehler in Console
- [ ] Lädt in unter 2 Sekunden

## Deployment
1. GitHub Repository erstellen
2. Code hochladen
3. GitHub Pages aktivieren
4. Custom Domain (optional)
