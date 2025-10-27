# Android Studio Installation - Schritt für Schritt

## ✅ Was bereits installiert ist:

- ✅ Node.js v22.20.0
- ✅ npm v10.9.3
- ✅ Capacitor v7.4.4
- ✅ Android-Plattform hinzugefügt
- ✅ Projekt-Struktur erstellt

## 📋 Was du jetzt noch machen musst:

### SCHRITT 1: Android Studio herunterladen (15 Minuten)

1. **Öffne Browser und gehe zu:**
   ```
   https://developer.android.com/studio
   ```

2. **Klicke auf den großen grünen Button:**
   - "Download Android Studio Ladybug"
   - Datei: ca. 1 GB

3. **Warte bis Download fertig ist**
   - Speicherort: Wahrscheinlich `Downloads` Ordner

---

### SCHRITT 2: Android Studio installieren (20 Minuten)

1. **Öffne die heruntergeladene .exe Datei**
   - Dateiname ähnlich: `android-studio-2024.x.x.xx-windows.exe`
   - Rechtsklick → Als Administrator ausführen

2. **Im Installations-Wizard:**
   - ✅ "Next" klicken
   - ✅ Komponenten: **ALLE** auswählen (besonders "Android Virtual Device")
   - ✅ Install Location: Standard beibehalten (z.B. `C:\Program Files\Android\Android Studio`)
   - ✅ "Next" → "Install" klicken
   - ⏳ Warten (5-10 Minuten)
   - ✅ "Finish" klicken

3. **Android Studio startet automatisch**

---

### SCHRITT 3: Android Studio Setup Wizard (30 Minuten)

**Beim ersten Start von Android Studio:**

1. **Import Settings:**
   - Wähle: "Do not import settings"
   - → Next

2. **Data Sharing:**
   - Wähle nach Belieben (z.B. "Don't send")
   - → Next

3. **Welcome:**
   - → Next

4. **Install Type:**
   - Wähle: ✅ **"Standard"** (empfohlen!)
   - → Next

5. **UI Theme:**
   - Wähle nach Geschmack (Light oder Dark)
   - → Next

6. **Verify Settings:**
   - Überprüfe die Liste
   - Wichtig: Android SDK sollte ca. 4-5 GB sein
   - **SDK Pfad merken!** z.B.: `C:\Users\Babsi\AppData\Local\Android\Sdk`
   - → Next

7. **License Agreement:**
   - Klicke auf jeden Eintrag links
   - Wähle jeweils: ✅ "Accept"
   - → Finish

8. **Downloading Components:**
   - ⏳ Android SDK wird heruntergeladen (15-30 Minuten!)
   - Gehe Kaffee/Tee holen ☕
   - Warte bis "Finish" Button erscheint
   - → Finish

---

### SCHRITT 4: Umgebungsvariablen setzen (5 Minuten)

**WICHTIG:** Damit dein System Android SDK findet!

1. **Windows-Suche öffnen (Windows-Taste)**
   - Tippe: `Umgebungsvariablen`
   - Klicke auf: "Systemumgebungsvariablen bearbeiten"

2. **Im Fenster "Systemeigenschaften":**
   - Klicke unten auf: "Umgebungsvariablen..."

3. **Neue Variable erstellen:**
   - Unter "Systemvariablen" (unterer Bereich)
   - Klicke: "Neu..."
   - **Name der Variablen:** `ANDROID_HOME`
   - **Wert der Variablen:** Dein SDK-Pfad (von SCHRITT 3.6), z.B.:
     ```
     C:\Users\Babsi\AppData\Local\Android\Sdk
     ```
   - → OK

4. **Path-Variable bearbeiten:**
   - Unter "Systemvariablen" finde: `Path`
   - Markiere `Path` → Klicke "Bearbeiten..."
   - Klicke "Neu" und füge hinzu:
     ```
     %ANDROID_HOME%\platform-tools
     ```
   - Klicke nochmal "Neu" und füge hinzu:
     ```
     %ANDROID_HOME%\tools
     ```
   - → OK
   - → OK
   - → OK

5. **WICHTIG: Computer neu starten!** 🔄
   - Die Umgebungsvariablen werden erst nach Neustart aktiv

---

### SCHRITT 5: Installation testen (Nach Neustart!)

1. **VS Code öffnen**

2. **Terminal öffnen (Strg + Ö)**

3. **Teste Android Debug Bridge:**
   ```bash
   adb --version
   ```

   **Erwartete Ausgabe:**
   ```
   Android Debug Bridge version 1.0.41
   Version 35.0.2-12147458
   ...
   ```

   ❌ **Falls Fehler:** "adb" wird nicht als Befehl erkannt
   → Umgebungsvariablen nochmal überprüfen!

4. **Teste Java (sollte jetzt installiert sein):**
   ```bash
   java -version
   ```

   **Erwartete Ausgabe:**
   ```
   openjdk version "17.x.x" ...
   ```

---

### SCHRITT 6: Projekt in Android Studio öffnen

1. **Im VS Code Terminal:**
   ```bash
   npm run open:android
   ```

   **ODER direkt in Android Studio:**
   - File → Open
   - Navigiere zu: `c:\Users\Babsi\Documents\Master Elementarpädagogik\ideenfunke\android`
   - Wähle den `android` Ordner → OK

2. **Beim ersten Öffnen:**
   - Android Studio lädt Gradle herunter (5-10 Minuten)
   - Unten in der Statusleiste siehst du Fortschritt
   - Warte bis: "Gradle sync finished" erscheint ✅

3. **Projekt-Struktur sichtbar:**
   - Links siehst du den Projektbaum
   - `app` → `src` → `main` → etc.

---

### SCHRITT 7: Virtuellen Emulator erstellen

1. **In Android Studio:**
   - Oben in der Toolbar: `Tools` → `Device Manager`

2. **Im Device Manager:**
   - Klicke: "Create Device" (oder "+"-Symbol)

3. **Hardware auswählen:**
   - Kategorie: "Phone"
   - Wähle: **"Pixel 5"** (oder ähnlich)
   - → Next

4. **System Image auswählen:**
   - Tab: "Recommended"
   - Wähle: **"Tiramisu" (API Level 33)** oder neuer
   - Falls "Download" neben dem Namen steht:
     - Klicke "Download"
     - Akzeptiere Lizenz
     - Warte bis Download fertig
   - → Next

5. **AVD konfigurieren:**
   - AVD Name: "Pixel_5_API_33" (oder lassen wie es ist)
   - Portrait Orientation
   - → Finish

6. **Emulator testen:**
   - Im Device Manager: Klicke Play-Button (▶️) neben deinem Gerät
   - Emulator-Fenster öffnet sich (dauert 1-2 Minuten beim ersten Mal)
   - Android-Oberfläche erscheint 🎉

---

### SCHRITT 8: App auf Emulator starten! 🚀

1. **Stelle sicher Emulator läuft** (von SCHRITT 7)

2. **In Android Studio:**
   - Oben in der Toolbar:
     - Links: Wähle "app" (Build-Konfiguration)
     - Rechts: Wähle deinen Emulator (z.B. "Pixel 5 API 33")
   - Klicke grünen Play-Button (▶️) oder `Shift + F10`

3. **Build-Prozess:**
   - Unten erscheint Build-Log
   - "Building..." (1-2 Minuten beim ersten Mal)
   - "Installing APK..."
   - "Launching app..."

4. **🎉 ERFOLG!**
   - Im Emulator erscheint deine IdeenFunke-App!
   - Du siehst die Altersgruppen-Auswahl
   - Die App funktioniert genau wie im Browser!

---

## ✅ Checkliste - Fertig wenn:

- ✅ Android Studio installiert
- ✅ Android SDK heruntergeladen
- ✅ Umgebungsvariablen gesetzt
- ✅ Computer neu gestartet
- ✅ `adb --version` funktioniert im Terminal
- ✅ Projekt in Android Studio geöffnet
- ✅ Gradle sync erfolgreich
- ✅ Emulator erstellt und läuft
- ✅ App auf Emulator gestartet

---

## 🆘 Troubleshooting

### Problem: "adb not found" nach Neustart
**Lösung:**
```bash
# Teste ob SDK gefunden wird:
echo %ANDROID_HOME%

# Sollte ausgeben: C:\Users\Babsi\AppData\Local\Android\Sdk
# Falls leer → Umgebungsvariablen nochmal setzen
```

### Problem: Gradle sync failed
**Lösung:**
1. In Android Studio: `File` → `Invalidate Caches` → `Invalidate and Restart`
2. Oder im Terminal:
   ```bash
   cd android
   ./gradlew clean
   ```

### Problem: Emulator startet nicht
**Lösung:**
1. Überprüfe ob Virtualisierung im BIOS aktiviert ist (Intel VT-x oder AMD-V)
2. Oder nutze einen echten Android-Test-Gerät via USB

### Problem: App stürzt sofort ab
**Lösung:**
1. Überprüfe Logcat (unten in Android Studio)
2. Suche nach roten Fehler-Zeilen
3. Oft: `npx cap sync` nochmal ausführen und neu builden

---

## 📱 Nächste Schritte (wenn alles funktioniert):

1. ✅ **App funktioniert im Emulator** → Glückwunsch!
2. 🔧 **Änderungen testen:**
   - Ändere etwas in deinem HTML/CSS
   - Führe aus: `npx cap sync`
   - In Android Studio: Run-Button nochmal drücken
3. 📦 **Release-Version erstellen** (siehe ANDROID-DEPLOYMENT.md Teil 6)
4. 🏪 **Google Play Store** (siehe ANDROID-DEPLOYMENT.md Teil 7-8)

---

## 💬 Melde dich wenn:

- ❌ Ein Schritt nicht funktioniert
- ❓ Du eine Fehlermeldung bekommst
- ✅ Die App erfolgreich läuft (dann machen wir weiter mit Release-Build!)

**Geschätzte Gesamtzeit:** 1-2 Stunden (inkl. Downloads)

Viel Erfolg! 🚀
