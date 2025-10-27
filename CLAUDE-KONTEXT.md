# Kontext für Claude Code - Android Studio Installation

## 🎯 AKTUELLER STATUS (Stand: 27.10.2025)

### Was bereits erledigt ist:

1. ✅ **Capacitor Setup komplett:**
   - package.json erstellt
   - Capacitor installiert (@capacitor/core, @capacitor/cli, @capacitor/android)
   - capacitor.config.json konfiguriert
   - Android-Plattform hinzugefügt mit `npx cap add android`
   - `android/` Ordner existiert mit komplettem native Android-Projekt
   - `www/` Ordner erstellt und Web-Dateien kopiert

2. ✅ **Android Studio Installation:**
   - Android Studio heruntergeladen und installiert
   - Setup Wizard durchlaufen mit "Standard" Installation
   - Android SDK installiert nach: `C:\Users\Babsi\AppData\Local\Android\Sdk`
   - SDK-Download abgeschlossen (alle Components installiert)

3. ✅ **Umgebungsvariablen gesetzt:**
   - Via CMD als Administrator ausgeführt:
     ```cmd
     setx ANDROID_HOME "C:\Users\Babsi\AppData\Local\Android\Sdk" /M
     setx PATH "%PATH%;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools" /M
     ```
   - Beide Befehle mit "ERFOLGREICH" bestätigt

4. ✅ **Computer wird neu gestartet**
   - Nötig damit Umgebungsvariablen aktiv werden

---

## 📋 NÄCHSTE SCHRITTE nach Neustart:

### SCHRITT 1: Installation testen
Befehle im Terminal:
```bash
adb --version
java -version
```

**Erwartete Ausgabe:**
- adb: "Android Debug Bridge version 1.0.41" oder ähnlich
- java: "openjdk version 17.x.x" oder ähnlich

**Falls Fehler:**
- Umgebungsvariablen prüfen mit `echo %ANDROID_HOME%`
- Sollte ausgeben: `C:\Users\Babsi\AppData\Local\Android\Sdk`

### SCHRITT 2: Projekt in Android Studio öffnen
```bash
npm run open:android
```

Oder manuell:
- Android Studio starten
- File → Open
- Navigieren zu: `c:\Users\Babsi\Documents\Master Elementarpädagogik\ideenfunke\android`

**Beim ersten Öffnen:**
- Gradle sync läuft automatisch (5-10 Minuten)
- Warten bis "Gradle sync finished" in der Statusleiste erscheint
- Eventuell Gradle-Wrapper Download

### SCHRITT 3: Emulator erstellen
In Android Studio:
1. Tools → Device Manager
2. Create Device
3. Hardware: Pixel 5 (empfohlen)
4. System Image: API 33 (Tiramisu) oder API 34
5. Falls Download nötig: Lizenz akzeptieren und warten
6. Finish
7. Emulator starten (Play-Button ▶️)

### SCHRITT 4: App auf Emulator starten
1. Emulator muss laufen (Android-Oberfläche sichtbar)
2. In Android Studio Toolbar:
   - Dropdown links: "app" wählen
   - Dropdown rechts: Emulator wählen
3. Grünen Play-Button (▶️) drücken
4. Build läuft (1-2 Min beim ersten Mal)
5. App startet im Emulator

**Erwartetes Ergebnis:**
- IdeenFunke-App läuft im Emulator
- Zeigt Altersgruppen-Buttons (Krippe, Kindergarten, Schulvorbereitung)
- App funktioniert wie im Browser

---

## 🗂️ PROJEKT-STRUKTUR:

```
ideenfunke/
├── android/                          # Native Android-Projekt (von Capacitor generiert)
│   ├── app/
│   │   ├── src/main/
│   │   │   ├── assets/public/       # Web-Dateien (von www/ kopiert)
│   │   │   ├── AndroidManifest.xml
│   │   │   └── res/                 # Icons, Resources
│   │   └── build.gradle             # App-Build-Config (Version hier!)
│   └── gradle/
├── www/                              # Web-Assets für Capacitor (sync'd)
│   ├── index.html
│   ├── css/
│   └── js/
├── css/                              # Original Web-Dateien (HIER arbeiten!)
├── js/
├── index.html
├── capacitor.config.json             # App-ID: at.ideenfunke.app
├── package.json                      # Scripts: sync, open:android
└── node_modules/
```

---

## 🔧 WICHTIGE BEFEHLE:

### Nach jeder Änderung in HTML/CSS/JS:
```bash
npm run sync
# oder: npx cap sync
```

### Android Studio öffnen:
```bash
npm run open:android
# oder: npx cap open android
```

### Gradle clean (bei Problemen):
```bash
cd android
./gradlew clean
cd ..
```

---

## 📱 APP-KONFIGURATION:

**App-ID:** `at.ideenfunke.app`
**App-Name:** IdeenFunke
**Package ID:** at.ideenfunke.app (wichtig: nicht mehr ändern nach Release!)

**Version (aktuell in android/app/build.gradle):**
- versionCode: 1
- versionName: "1.0.0"

---

## 🆘 BEKANNTE PROBLEME & LÖSUNGEN:

### "adb not found" nach Neustart
```bash
echo %ANDROID_HOME%
# Falls leer → Umgebungsvariablen nochmal setzen
```

### Gradle sync failed
- File → Invalidate Caches → Invalidate and Restart
- Oder: cd android && ./gradlew clean

### App zeigt alte Version
```bash
npx cap sync --force
# Dann in Android Studio: Build → Clean Project
```

### Emulator startet nicht
- Virtualisierung im BIOS prüfen (Intel VT-x / AMD-V)
- Oder: Echtes Android-Gerät via USB nutzen

---

## 📝 DOKUMENTATION:

Alle Anleitungen im Projekt:
- `ANDROID-DEPLOYMENT.md` - Kompletter Guide (11 Teile)
- `INSTALL-ANDROID-STUDIO.md` - Installations-Schritte
- `ANDROID-COMMANDS.md` - Befehlsreferenz
- `NEUSTART-CHECKLISTE.md` - Nach-Neustart Anleitung
- `ANDROID_SDK_PATH.txt` - SDK-Pfad gespeichert
- `CLAUDE.md` - Projekt-Kontext für Claude Code

---

## 🎯 ZIEL DER SESSION:

**Phase 1 (JETZT):** App im Emulator zum Laufen bringen
**Phase 2 (SPÄTER):** Release-Build erstellen (AAB-Datei)
**Phase 3 (SPÄTER):** Google Play Store Upload

---

## 💬 WAS DIE USERIN WAHRSCHEINLICH SAGEN WIRD:

### Erfolgsfall:
- "Ich bin zurück nach dem Neustart"
- "adb --version funktioniert"
- "Android Studio ist offen"

→ **DANN:** Weiter mit Emulator erstellen (SCHRITT 3)

### Problem-Fall:
- "adb funktioniert nicht"
- "Android Studio öffnet nicht"
- "Gradle sync failed"

→ **DANN:** Troubleshooting (siehe oben), Fehler analysieren

---

## 🔄 WORKFLOW NACH ERFOLGREICHEM TEST:

1. App läuft im Emulator ✅
2. Userin kann Änderungen testen (HTML/CSS/JS editieren → `npm run sync` → Rebuild)
3. Screenshots für Play Store machen
4. Release-Build erstellen (Teil 6 von ANDROID-DEPLOYMENT.md)
5. Google Play Developer Account anlegen
6. App hochladen

---

## ⚙️ TECHNISCHE DETAILS:

**Node.js Version:** v22.20.0
**npm Version:** v10.9.3
**Capacitor Version:** ~7.4.4
**Android SDK Location:** C:\Users\Babsi\AppData\Local\Android\Sdk
**Projekt-Pfad:** c:\Users\Babsi\Documents\Master Elementarpädagogik\ideenfunke
**Git-Branch:** master
**Repository:** https://github.com/babsistnr-dot/ideenfunke

---

## 📌 WICHTIGE HINWEISE:

1. **Alle Commits wurden gemacht** vor dem Neustart
2. **www/ Ordner ist in .gitignore** (wird nicht committed)
3. **android/ Ordner ist in .gitignore** (wird nicht committed)
4. **Keystore noch NICHT erstellt** (kommt später für Release)
5. **App-Icons noch NICHT erstellt** (können später generiert werden)

---

## 🎨 APP-DETAILS:

- Web-App läuft bereits perfekt im Browser
- 135 Aktivitäten in der Datenbank
- Filter nach Altersgruppen, Bildungsbereichen, Themen
- Entwicklungsziele werden angezeigt
- Mobile-first Design mit CSS Custom Properties
- Keine Dependencies, pure HTML/CSS/JS

---

**STATUS:** Warten auf Neustart und Test der Installation ⏳

**NÄCHSTER MILESTONE:** App läuft im Android-Emulator 🚀
