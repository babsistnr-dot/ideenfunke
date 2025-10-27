# IdeenFunke - Evidenzbasierte Aktivitäten für die Elementarpädagogik

## Projektkontext (WARUM)

### Domänenbeschreibung
IdeenFunke ist ein digitales Tool für Elementarpädagog:innen, das evidenzbasierte Aktivitätsvorschläge basierend auf Entwicklungsstufen bereitstellt. Es bildet das erste Modul des geplanten umfassenderen Systems "PlanEvi".

### Motivation
- **Praxisproblem**: Pädagog:innen benötigen schnell abrufbare, entwicklungsgerechte Aktivitätsideen
- **Zeitdruck**: Im pädagogischen Alltag bleibt wenig Zeit für aufwendige Recherche
- **Qualitätsanspruch**: Aktivitäten sollen evidenzbasiert und entwicklungsfördernd sein
- **Wissenslücke**: Nicht alle Fachkräfte haben gleichermaßen Zugriff auf aktuelle pädagogische Literatur

### Zielgruppe
- **Primär**: Elementarpädagog:innen in österreichischen Kindergärten und Krippen
- **Altersgruppen**: Krippe (1-3 Jahre), Kindergarten (3-5 Jahre), Schulvorbereitung (5-6 Jahre)
- **Sekundär**: Tageseltern, Frühe Hilfen

### Fachlicher Hintergrund
Die Aktivitäten basieren auf:
- Entwicklungspsychologischen Meilensteinen (nach Largo, Michaelis)
- Österreichischem Bildungsrahmenplan
- Prinzipien der evidenzbasierten Pädagogik
- Praktischer Erfahrung aus 10 Jahren Kindergartenpraxis

### Projektphase
Dies ist ein Lernprojekt im Rahmen der Programmierausbildung und gleichzeitig der Prototyp für ein späteres Masterarbeitsprojekt.

## Entwicklungsansatz
- **Methode**: Promptotyping nach Christopher Pollin
- **Werkzeuge**: VS Code, Claude Code
- **Technologie**: HTML, CSS, JavaScript (Vanilla)
- **Mobile App**: Capacitor (Web-to-Native)
- **Deployment**: Android App (Google Play Store)

## Technologie-Stack

### Web-App
- Pure HTML5, CSS3, JavaScript (ES6+)
- Keine Frameworks, keine Dependencies
- Mobile-first responsive Design
- 135+ Aktivitäten in der Datenbank

### Android-App
- **Capacitor** für Web-to-Native Konvertierung
- Native Android-Projekt generiert
- App-ID: `at.ideenfunke.app`
- Deployment: Google Play Store

## Schnellstart

### Web-App lokal öffnen
```bash
# Einfach im Browser öffnen:
start index.html
```

### Android-App entwickeln
```bash
# Änderungen synchronisieren:
npm run sync

# Android Studio öffnen:
npm run open:android
```

Siehe [docs/android/](docs/android/) für detaillierte Android-Anleitungen.

## Dokumentation

### 📱 Android-Entwicklung
- [ANDROID-DEPLOYMENT.md](docs/android/ANDROID-DEPLOYMENT.md) - Komplette Android-Anleitung (alle Schritte)
- [INSTALL-ANDROID-STUDIO.md](docs/android/INSTALL-ANDROID-STUDIO.md) - Android Studio Installation
- [ANDROID-COMMANDS.md](docs/android/ANDROID-COMMANDS.md) - Befehlsreferenz
- [NEUSTART-CHECKLISTE.md](docs/android/NEUSTART-CHECKLISTE.md) - Fortsetzung nach Neustart

### 📚 Projekt-Entwicklung
- [ENTWICKLUNGSLOG.md](docs/development/ENTWICKLUNGSLOG.md) - Vollständiger Entwicklungsverlauf
- [DESIGN.md](docs/development/DESIGN.md) - Design-Entscheidungen
- [DATA.md](docs/development/DATA.md) - Datenstruktur

### 🤖 Für Claude Code
- [CLAUDE.md](CLAUDE.md) - Projekt-Kontext für Claude Code Instanzen

## Langfristige Vision
IdeenFunke soll perspektivisch in das umfassendere System "PlanEvi" integriert werden, das zusätzlich Beobachtungs- und Reflexionstools bietet.
