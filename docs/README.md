# IdeenFunke - Dokumentation

Übersicht über alle Dokumentations-Dateien im Projekt.

## 📱 Android-Entwicklung

Alles rund um die Android-App-Entwicklung und Deployment.

| Datei | Beschreibung |
|-------|--------------|
| [ANDROID-DEPLOYMENT.md](android/ANDROID-DEPLOYMENT.md) | **Hauptanleitung** - Kompletter Guide von Setup bis Play Store (12 Teile) |
| [INSTALL-ANDROID-STUDIO.md](android/INSTALL-ANDROID-STUDIO.md) | Schritt-für-Schritt Android Studio Installation |
| [ANDROID-COMMANDS.md](android/ANDROID-COMMANDS.md) | Befehlsreferenz für tägliche Android-Entwicklung |
| [NEUSTART-CHECKLISTE.md](android/NEUSTART-CHECKLISTE.md) | Anleitung zum Weitermachen nach Computer-Neustart |
| [CLAUDE-KONTEXT.md](android/CLAUDE-KONTEXT.md) | Aktueller Status für Claude Code (intern) |
| [ANDROID_SDK_PATH.txt](android/ANDROID_SDK_PATH.txt) | Android SDK Pfad gespeichert |

**Start hier:**
- Noch nie Android entwickelt? → [INSTALL-ANDROID-STUDIO.md](android/INSTALL-ANDROID-STUDIO.md)
- Android Studio läuft schon? → [ANDROID-COMMANDS.md](android/ANDROID-COMMANDS.md)
- Komplette Übersicht? → [ANDROID-DEPLOYMENT.md](android/ANDROID-DEPLOYMENT.md)

---

## 📚 Projekt-Entwicklung

Dokumentation zur Web-App-Entwicklung und Design-Entscheidungen.

| Datei | Beschreibung |
|-------|--------------|
| [ENTWICKLUNGSLOG.md](development/ENTWICKLUNGSLOG.md) | **Vollständige Historie** - 6 Entwicklungsphasen mit Details |
| [DATA.md](development/DATA.md) | Datenstruktur und Beispiel-Aktivitäten |
| [DESIGN.md](development/DESIGN.md) | Design-Entscheidungen und Styling-Guide |
| [INSTRUCTIONS.md](development/INSTRUCTIONS.md) | Original-Instruktionen für Entwicklung |
| [REQUIREMENTS.md](development/REQUIREMENTS.md) | Anforderungen und Features |

**Start hier:**
- Projekt verstehen? → [ENTWICKLUNGSLOG.md](development/ENTWICKLUNGSLOG.md)
- Neue Aktivität hinzufügen? → [DATA.md](development/DATA.md)
- Design anpassen? → [DESIGN.md](development/DESIGN.md)

---

## 🤖 Für Claude Code

Spezielle Dateien für KI-Assistenz mit Claude Code.

| Datei | Beschreibung |
|-------|--------------|
| [../CLAUDE.md](../CLAUDE.md) | **Projekt-Kontext** für Claude Code Instanzen |

Diese Datei wird automatisch von Claude Code gelesen beim Öffnen des Projekts.

---

## 📖 Hauptdokumentation

Die wichtigsten Dateien im Projekt-Root:

| Datei | Beschreibung |
|-------|--------------|
| [../README.md](../README.md) | **Projekt-Übersicht** - Motivation, Tech Stack, Schnellstart |
| [../package.json](../package.json) | npm-Konfiguration mit Scripts |
| [../capacitor.config.json](../capacitor.config.json) | Capacitor-Konfiguration für Android |

---

## 🗂️ Verzeichnis-Struktur

```
docs/
├── README.md                    # Diese Datei - Dokumentations-Index
├── android/                     # Android-App Dokumentation
│   ├── ANDROID-DEPLOYMENT.md   # Haupt-Guide
│   ├── INSTALL-ANDROID-STUDIO.md
│   ├── ANDROID-COMMANDS.md
│   ├── NEUSTART-CHECKLISTE.md
│   ├── CLAUDE-KONTEXT.md
│   └── ANDROID_SDK_PATH.txt
└── development/                 # Web-App Entwicklung
    ├── ENTWICKLUNGSLOG.md      # Entwicklungs-Historie
    ├── DATA.md
    ├── DESIGN.md
    ├── INSTRUCTIONS.md
    └── REQUIREMENTS.md
```

---

## 🚀 Quick Links

### Ich möchte...

**...die App zum ersten Mal als Android-App bauen:**
→ [android/INSTALL-ANDROID-STUDIO.md](android/INSTALL-ANDROID-STUDIO.md)

**...Änderungen an der Web-App machen:**
→ Arbeite in `index.html`, `css/`, `js/` → Dann `npm run sync`

**...verstehen wie das Projekt entstanden ist:**
→ [development/ENTWICKLUNGSLOG.md](development/ENTWICKLUNGSLOG.md)

**...neue Aktivitäten hinzufügen:**
→ [development/DATA.md](development/DATA.md) + [../CLAUDE.md](../CLAUDE.md)

**...die App in den Play Store bringen:**
→ [android/ANDROID-DEPLOYMENT.md](android/ANDROID-DEPLOYMENT.md) (Teil 6-8)

**...häufig verwendete Befehle nachschauen:**
→ [android/ANDROID-COMMANDS.md](android/ANDROID-COMMANDS.md)

---

## 💡 Tipps

1. **Lesezeichen setzen:** Diese Seite als Startpunkt für alle Dokumentation
2. **Suchfunktion nutzen:** VS Code → `Strg+Shift+F` durchsucht alle Dateien
3. **Markdown-Vorschau:** `Strg+Shift+V` in VS Code für formatierte Ansicht
4. **Links funktionieren:** Klicke auf Links in VS Code (Strg+Klick)

---

**Letzte Aktualisierung:** 2025-10-27
**Projekt-Version:** 1.0.0 (Android-Setup Phase)
