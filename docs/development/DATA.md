# Datenstruktur und Beispieldaten - IdeenFunke

## Datenmodell für Aktivitäten

```javascript
{
  id: "unique_id",
  titel: "Aktivitätsname",
  altersgruppe: ["0-1", "1-2", "2-3", "3-6"], // Array für Mehrfachzuordnung
  bildungsbereiche: ["bewegung", "sprache"], // Array
  kurzbeschreibung: "2-3 Sätze Beschreibung",
  material: ["Liste", "der", "Materialien"],
  zeitdauer: "10-15 Minuten",
  kompetenzen: ["Feinmotorik", "Konzentration"],
  anleitung: "Detaillierte Schritt-für-Schritt Anleitung...",
  variationen: ["Variation 1", "Variation 2"],
  beobachtungshinweise: "Worauf sollte geachtet werden...",
  entwicklungspsychologie: "Theoretischer Hintergrund..."
}
```

## Beispielaktivitäten

### 0-1 Jahr

```javascript
{
  id: "baby_01",
  titel: "Seifenblasen beobachten",
  altersgruppe: ["0-1"],
  bildungsbereiche: ["aesthetik", "natur"],
  kurzbeschreibung: "Baby beobachtet schwebende Seifenblasen. Fördert visuelle Wahrnehmung und Aufmerksamkeit.",
  material: ["Seifenblasenlösung"],
  zeitdauer: "5-10 Minuten",
  kompetenzen: ["Visuelle Verfolgung", "Aufmerksamkeit", "Staunen"],
  anleitung: "Pusten Sie in ruhigem Tempo Seifenblasen in Sichtweite des Babys. Beobachten Sie die Reaktionen.",
  variationen: ["Bei Sonnenlicht für Regenbogeneffekte", "Draußen im Garten"],
  beobachtungshinweise: "Verfolgt das Baby die Blasen mit den Augen? Zeigt es Freude?",
  entwicklungspsychologie: "Ab 3 Monaten können Babys bewegte Objekte mit den Augen verfolgen."
}
```

### 1-2 Jahre

```javascript
{
  id: "kleinkind_01",
  titel: "Wasserschütten",
  altersgruppe: ["1-2"],
  bildungsbereiche: ["bewegung", "natur"],
  kurzbeschreibung: "Mit verschiedenen Gefäßen Wasser umschütten. Trainiert Hand-Auge-Koordination.",
  material: ["Verschiedene Becher/Schüsseln", "Wasser", "Handtuch", "Tablett"],
  zeitdauer: "15-20 Minuten",
  kompetenzen: ["Feinmotorik", "Konzentration", "Ursache-Wirkung"],
  anleitung: "Auf einem Tablett verschiedene Gefäße bereitstellen. Kind experimentiert selbstständig.",
  variationen: ["Mit gefärbtem Wasser", "Verschiedene Füllmaterialien (Reis, Linsen)"],
  beobachtungshinweise: "Wie gezielt sind die Bewegungen? Entwickelt das Kind eigene Strategien?",
  entwicklungspsychologie: "Schüttbewegungen sind wichtige Vorläufer für spätere Alltagskompetenzen."
}
```

### 2-3 Jahre

```javascript
{
  id: "kiga_01",
  titel: "Farbensortieren",
  altersgruppe: ["2-3"],
  bildungsbereiche: ["aesthetik", "natur"],
  kurzbeschreibung: "Alltagsgegenstände nach Farben sortieren. Fördert Kategorisierung und Farbverständnis.",
  material: ["Bunte Gegenstände", "Körbe oder Schalen"],
  zeitdauer: "10-15 Minuten",
  kompetenzen: ["Farbdifferenzierung", "Kategorisierung", "Feinmotorik"],
  anleitung: "Verschiedenfarbige Alltagsgegenstände sammeln. Kind sortiert diese in farblich passende Behälter.",
  variationen: ["Nach Größe sortieren", "Nach Material sortieren"],
  beobachtungshinweise: "Benennt das Kind die Farben? Erkennt es Farbabstufungen?",
  entwicklungspsychologie: "Farbdifferenzierung entwickelt sich zwischen 2-3 Jahren stark weiter."
}
```

### 3-6 Jahre

```javascript
{
  id: "vorschule_01",
  titel: "Bewegungsgeschichte",
  altersgruppe: ["3-6"],
  bildungsbereiche: ["bewegung", "sprache"],
  kurzbeschreibung: "Geschichte mit Bewegungen verknüpfen. Fördert Zuhören und Bewegungskoordination.",
  material: ["Keine (evtl. Bilderbuch als Vorlage)"],
  zeitdauer: "15-20 Minuten",
  kompetenzen: ["Zuhören", "Bewegungsplanung", "Fantasie"],
  anleitung: "Geschichte erzählen, bei bestimmten Wörtern führen Kinder vereinbarte Bewegungen aus.",
  variationen: ["Kinder erfinden eigene Bewegungen", "Mit Instrumenten begleiten"],
  beobachtungshinweise: "Wie schnell reagieren die Kinder? Merken sie sich die Zuordnungen?",
  entwicklungspsychologie: "Verknüpfung von Sprache und Bewegung fördert die Gehirnentwicklung."
}
```

## Bildungsbereiche (Codes)
- `emotionen` - Emotionen und soziale Beziehungen
- `ethik` - Ethik und Gesellschaft
- `sprache` - Sprache und Kommunikation
- `bewegung` - Bewegung und Gesundheit
- `aesthetik` - Ästhetik und Gestaltung
- `natur` - Natur und Technik

## Datenspeicherung
- Initial: Aktivitäten als JavaScript-Array im Code
- Zukunft: JSON-Datei zum einfachen Erweitern
- Später: localStorage für eigene Aktivitäten
