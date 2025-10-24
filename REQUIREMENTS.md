# Anforderungen - IdeenFunke

## Funktionale Anforderungen (F)

### F1: Altersauswahl
- Nutzer:innen können eine Altersgruppe auswählen
- Verfügbare Gruppen: 0-1 Jahr, 1-2 Jahre, 2-3 Jahre, 3-6 Jahre
- Einfache, visuelle Auswahl (z.B. Buttons oder Dropdown)

### F2: Bildungsbereich-Filter
- Auswahl des Bildungsbereichs nach österreichischem Bildungsrahmenplan:
  - Emotionen und soziale Beziehungen
  - Ethik und Gesellschaft  
  - Sprache und Kommunikation
  - Bewegung und Gesundheit
  - Ästhetik und Gestaltung
  - Natur und Technik
- Mehrfachauswahl möglich
- Option "Alle Bereiche" verfügbar

### F3: Aktivitäten-Anzeige
- Anzeige von 3-5 zufälligen, passenden Aktivitäten
- Jede Aktivität enthält:
  - Titel
  - Kurzbeschreibung (2-3 Sätze)
  - Benötigtes Material
  - Zeitdauer (Richtwert)
  - Geförderte Kompetenzen
  - Bildungsbereich-Zuordnung

### F4: Neue Vorschläge
- Button "Neue Ideen" generiert andere zufällige Aktivitäten
- Verhindert direkte Wiederholungen

### F5: Detailansicht
- Klick auf Aktivität öffnet erweiterte Ansicht mit:
  - Ausführlicher Anleitung
  - Variationsmöglichkeiten
  - Beobachtungshinweise
  - Entwicklungspsychologische Einordnung

## Nicht-funktionale Anforderungen (P)

### P1: Benutzerfreundlichkeit
- Intuitive Bedienung ohne Einarbeitung
- Mobile-responsive Design
- Klare, übersichtliche Gestaltung
- Barrierearm (große Schrift, gute Kontraste)

### P2: Performance
- Ladezeit < 2 Sekunden
- Funktioniert offline (nach initialem Laden)
- Keine externe Datenbank erforderlich

### P3: Datenschutz
- Keine Speicherung personenbezogener Daten
- Keine Cookies (außer technisch notwendige)
- DSGVO-konform
- Funktioniert ohne Benutzerregistrierung

### P4: Wartbarkeit
- Einfaches Hinzufügen neuer Aktivitäten
- Klar strukturierter Code
- Dokumentierte Funktionen
- Versionskontrolle via Git

### P5: Skalierbarkeit
- Vorbereitet für 100+ Aktivitäten
- Struktur erlaubt spätere Erweiterung um weitere Module
- Export/Import-Funktion für Aktivitäten (Zukunft)

## Mindestanforderungen für MVP (Minimum Viable Product)
- [ ] F1: Altersauswahl
- [ ] F3: Basis-Aktivitäten-Anzeige (ohne Detailansicht)
- [ ] F4: Neue Vorschläge
- [ ] P1: Grundlegende Benutzerfreundlichkeit
- [ ] P2: Offline-Funktionalität
- [ ] Mindestens 15 Aktivitäten pro Altersgruppe
