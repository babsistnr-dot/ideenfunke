# Android Development - Wichtige Befehle

## 📱 Tägliche Befehle (wenn du an der App arbeitest)

### Web-Änderungen übertragen
Wenn du etwas in `index.html`, `css/styles.css` oder `js/*.js` änderst:

```bash
# 1. Kopiere Änderungen nach www/
npm run sync

# Das ist Kurzform für:
# npx cap sync
```

### Android Studio öffnen
```bash
npm run open:android

# Oder direkt:
npx cap open android
```

### App neu starten
- In Android Studio: Grünen Play-Button (▶️) drücken
- Oder: `Shift + F10`

---

## 🔧 Setup-Befehle (einmalig)

### Capacitor installieren (✅ Bereits gemacht!)
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
```

### Android-Plattform hinzufügen (✅ Bereits gemacht!)
```bash
npx cap add android
```

---

## 🧹 Problembehebung

### Gradle clean (wenn Build fehlschlägt)
```bash
cd android
./gradlew clean
cd ..
```

### Capacitor Plugins aktualisieren
```bash
npx cap sync android
```

### Projekt-Cache löschen
```bash
npx cap sync --force
```

### Node Modules neu installieren
```bash
rm -rf node_modules
npm install
```

---

## 📦 Build-Befehle

### Debug-Build (zum Testen)
```bash
cd android
./gradlew assembleDebug
```

Output: `android/app/build/outputs/apk/debug/app-debug.apk`

### Release-Build (für Play Store)
```bash
cd android
./gradlew bundleRelease
```

Output: `android/app/build/outputs/bundle/release/app-release.aab`

---

## 🔍 Test-Befehle

### Geräte auflisten
```bash
adb devices
```

### Logcat (Live-Logs vom Gerät/Emulator)
```bash
adb logcat
```

### App-Logs filtern
```bash
adb logcat | grep -i "IdeenFunke"
```

### Installierte App deinstallieren
```bash
adb uninstall at.ideenfunke.app
```

---

## 📝 Git-Workflow

### Vor Android-Änderungen committen
```bash
git add .
git commit -m "Update before Android build"
```

### Nach erfolgreichen Tests
```bash
git add .
git commit -m "Test successful on Android"
git push
```

---

## 🚀 Workflow-Beispiel

**Typischer Entwicklungstag:**

```bash
# 1. Änderungen in HTML/CSS/JS machen
# (z.B. neue Aktivität in js/data.js hinzufügen)

# 2. Änderungen nach www/ synchronisieren
npm run sync

# 3. Android Studio öffnen (falls nicht offen)
npm run open:android

# 4. In Android Studio: Play-Button drücken
# App startet mit deinen Änderungen!

# 5. Wenn zufrieden: Commit
git add .
git commit -m "Add new activity XYZ"
```

---

## 🎯 Version erhöhen (vor jedem Update)

Öffne: `android/app/build.gradle`

Finde:
```gradle
versionCode 1        // → Erhöhe auf 2, 3, 4...
versionName "1.0.0"  // → Ändere zu "1.0.1", "1.1.0" etc.
```

**Dann:**
```bash
npm run sync
cd android
./gradlew bundleRelease
```

---

## 📱 Emulator-Befehle

### Emulator von Kommandozeile starten
```bash
# Liste verfügbare Emulatoren
emulator -list-avds

# Starte spezifischen Emulator
emulator -avd Pixel_5_API_33
```

### Emulator-Performance verbessern
In Android Studio:
- `Tools` → `AVD Manager`
- Klicke Edit-Icon (Stift)
- `Show Advanced Settings`
- RAM: 2048 MB → 4096 MB (falls genug Arbeitsspeicher)

---

## 🆘 Häufige Probleme & Lösungen

### "Android SDK not found"
```bash
# Überprüfe Umgebungsvariable
echo %ANDROID_HOME%

# Sollte sein: C:\Users\Babsi\AppData\Local\Android\Sdk
# Falls leer → Siehe INSTALL-ANDROID-STUDIO.md SCHRITT 4
```

### "Gradle sync failed"
```bash
cd android
./gradlew clean
# Dann in Android Studio: File → Sync Project with Gradle Files
```

### "capacitor.config.json not found"
```bash
# Stelle sicher du bist im Projekt-Root:
cd "c:\Users\Babsi\Documents\Master Elementarpädagogik\ideenfunke"
npx cap sync
```

### App zeigt alte Version
```bash
# Harte Synchronisation:
npx cap sync --force

# In Android Studio:
# Build → Clean Project
# Build → Rebuild Project
```

---

## 🎨 Asset-Updates

### App-Icon ändern
1. Erstelle `icon.png` (1024x1024) im Projekt-Root
2. Installiere Asset-Generator:
   ```bash
   npm install @capacitor/assets --save-dev
   ```
3. Generiere Icons:
   ```bash
   npx capacitor-assets generate
   ```

### Splash-Screen ändern
1. Erstelle `splash.png` (2732x2732) im Projekt-Root
2. Führe aus:
   ```bash
   npx capacitor-assets generate
   ```

---

## 📊 Nützliche Informationen

### Projekt-Struktur
```
ideenfunke/
├── android/               # Native Android-Projekt (nicht manuell bearbeiten!)
├── www/                   # Kopie deiner Web-Assets für Capacitor
│   ├── index.html
│   ├── css/
│   └── js/
├── css/                   # Deine Original-Dateien (HIER arbeiten!)
├── js/
├── index.html
├── capacitor.config.json  # Capacitor-Konfiguration
└── package.json          # Node-Abhängigkeiten
```

### Wichtige Dateien in android/

- `android/app/build.gradle` → Version, App-ID
- `android/app/src/main/AndroidManifest.xml` → App-Berechtigungen
- `android/app/src/main/res/` → Icons, Strings
- `android/app/src/main/assets/public/` → Deine Web-Dateien

### Capacitor Config erklärt

```json
{
  "appId": "at.ideenfunke.app",           // Eindeutige ID (nicht ändern nach Release!)
  "appName": "IdeenFunke",                // App-Name
  "webDir": "www",                        // Wo Web-Dateien liegen
  "server": {
    "androidScheme": "https"              // Nutze HTTPS (sicherer)
  },
  "android": {
    "allowMixedContent": true,            // HTTP + HTTPS erlauben
    "backgroundColor": "#FFE5DC"          // Hintergrundfarbe beim Laden
  }
}
```

---

## 🔗 Hilfreiche Links

- **Capacitor Docs:** https://capacitorjs.com/docs
- **Android Studio:** https://developer.android.com/studio/intro
- **Play Console:** https://play.google.com/console
- **ADB Docs:** https://developer.android.com/tools/adb

---

## 💡 Pro-Tipps

1. **Immer erst im Browser testen** (schneller als Android-Build)
2. **`npm run sync` nach JEDER Änderung** (sonst siehst du alte Version)
3. **Git-Commits vor größeren Änderungen** (Sicherheit!)
4. **Logcat offen halten** (siehst sofort Fehler)
5. **Keyboard-Shortcuts nutzen:**
   - `Shift + F10` → Run App
   - `Ctrl + F9` → Build Project
   - `Alt + 4` → Logcat öffnen

---

Speichere diese Datei als Referenz! ⭐
