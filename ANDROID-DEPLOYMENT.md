# IdeenFunke → Android App (Google Play Store)

## Übersicht

Dieses Dokument führt dich durch den kompletten Prozess, aus deiner Web-App eine Android-App zu machen und sie im Google Play Store zu veröffentlichen.

**Geschätzte Zeit:** 4-6 Stunden (beim ersten Mal)
**Kosten:** 25 USD einmalige Registrierungsgebühr für Google Play Developer Account

---

## TEIL 1: Technologie-Entscheidung

### Empfehlung: Capacitor

**Was ist Capacitor?**
- Moderne Technologie von Ionic, um Web-Apps in native Apps zu verpacken
- Deine HTML/CSS/JS App läuft in einem nativen Container
- Zugriff auf native Device-Funktionen (Kamera, Speicher, etc.)
- Einfacher als Cordova, moderner als PhoneGap

**Alternativen (nicht empfohlen für Anfänger):**
- React Native (komplette Neu-Entwicklung nötig)
- Flutter (komplette Neu-Entwicklung nötig)
- PWA (Progressive Web App) - keine Play Store Distribution

---

## TEIL 2: Voraussetzungen installieren

### 2.1 Node.js & npm installieren

**Überprüfen ob bereits installiert:**
```bash
node --version
npm --version
```

**Falls nicht installiert:**
1. Gehe zu https://nodejs.org/
2. Lade "LTS" Version herunter (aktuell ca. 20.x)
3. Installiere mit Standard-Einstellungen
4. VS Code neu starten
5. Erneut `node --version` testen

### 2.2 Android Studio installieren

**Download:**
- https://developer.android.com/studio
- Größe: ca. 1 GB Download, 4-5 GB installiert

**Installation:**
1. Android Studio installieren (Standard-Einstellungen)
2. Beim ersten Start: "Standard" Setup wählen
3. Android SDK wird automatisch heruntergeladen (dauert 15-30 Min)
4. Wichtig: Merke dir den SDK-Pfad (z.B. `C:\Users\Babsi\AppData\Local\Android\Sdk`)

**Android SDK konfigurieren:**
1. In Android Studio: `Tools → SDK Manager`
2. Installiere:
   - ✅ Android API 33 (Android 13) oder neuer
   - ✅ Android SDK Build-Tools
   - ✅ Android SDK Platform-Tools
   - ✅ Android Emulator (optional, zum Testen)

### 2.3 Umgebungsvariablen setzen (Windows)

1. Windows-Suche: "Umgebungsvariablen" → "Systemumgebungsvariablen bearbeiten"
2. Klicke auf "Umgebungsvariablen"
3. Unter "Systemvariablen" → "Neu":
   - Variable: `ANDROID_HOME`
   - Wert: `C:\Users\Babsi\AppData\Local\Android\Sdk` (dein SDK-Pfad)
4. Bearbeite "Path" (Systemvariablen):
   - Füge hinzu: `%ANDROID_HOME%\platform-tools`
   - Füge hinzu: `%ANDROID_HOME%\tools`
5. OK klicken, **Computer neu starten**

**Testen:**
```bash
adb --version
```
Sollte "Android Debug Bridge version..." anzeigen.

---

## TEIL 3: Projekt für Capacitor vorbereiten

### 3.1 Projektstruktur anpassen

Dein aktuelles Projekt ist direkt im Root - wir müssen es leicht umstrukturieren:

```bash
# In VS Code Terminal (Strg + Ö)
cd "c:\Users\Babsi\Documents\Master Elementarpädagogik\ideenfunke"
```

**WICHTIG:** Erstelle zuerst ein Git-Backup:
```bash
git add .
git commit -m "Backup vor Android-Konvertierung"
git push
```

### 3.2 package.json erstellen

```bash
npm init -y
```

Das erstellt eine `package.json` Datei im Root-Verzeichnis.

Öffne die Datei und ändere sie so:

```json
{
  "name": "ideenfunke",
  "version": "1.0.0",
  "description": "Evidenzbasierte Aktivitäten für Elementarpädagog:innen",
  "main": "index.html",
  "scripts": {
    "start": "npx http-server . -p 8080"
  },
  "keywords": ["kindergarten", "elementarpädagogik", "aktivitäten"],
  "author": "Dein Name",
  "license": "MIT"
}
```

### 3.3 Capacitor installieren

```bash
npm install @capacitor/core @capacitor/cli
npm install @capacitor/android
```

### 3.4 Capacitor initialisieren

```bash
npx cap init
```

**Interaktive Fragen beantworten:**
- App name: `IdeenFunke`
- Package ID: `at.ideenfunke.app` (wichtig: muss eindeutig sein, reverse domain)
- Web asset directory: `.` (Punkt = aktuelles Verzeichnis, da deine index.html im Root liegt)

Das erstellt eine `capacitor.config.json` Datei.

### 3.5 Android-Plattform hinzufügen

```bash
npx cap add android
```

Das erstellt einen `android/` Ordner mit dem kompletten Android-Projekt.

---

## TEIL 4: App-Konfiguration

### 4.1 capacitor.config.json anpassen

Öffne `capacitor.config.json` und ergänze:

```json
{
  "appId": "at.ideenfunke.app",
  "appName": "IdeenFunke",
  "webDir": ".",
  "server": {
    "androidScheme": "https"
  },
  "android": {
    "allowMixedContent": true,
    "backgroundColor": "#FFE5DC"
  }
}
```

### 4.2 App-Icon und Splash Screen erstellen

**App-Icon:**
- Benötigt: 1024x1024 PNG (quadratisch, keine Transparenz)
- Tool: https://icon.kitchen/ (kostenlos)
- Oder erstelle selbst ein Icon mit "IdeenFunke" Logo

**Einfacher Weg (später):**
1. Erstelle `icon.png` (1024x1024) im Root
2. Erstelle `splash.png` (2732x2732) im Root
3. Installiere: `npm install @capacitor/assets --save-dev`
4. Führe aus: `npx capacitor-assets generate`

### 4.3 AndroidManifest.xml anpassen

Öffne `android/app/src/main/AndroidManifest.xml` und überprüfe:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application
        android:label="IdeenFunke"
        android:icon="@mipmap/ic_launcher"
        android:roundIcon="@mipmap/ic_launcher_round">
        ...
    </application>

    <!-- Internet-Berechtigung (sollte bereits vorhanden sein) -->
    <uses-permission android:name="android.permission.INTERNET" />
</manifest>
```

---

## TEIL 5: Erste Build & Test

### 5.1 Web-Assets kopieren

Jedes Mal wenn du deine Web-App änderst, musst du die Dateien kopieren:

```bash
npx cap sync
```

Das kopiert deine HTML/CSS/JS Dateien in das Android-Projekt.

### 5.2 Android Studio öffnen

```bash
npx cap open android
```

Das öffnet dein Projekt in Android Studio.

**Beim ersten Öffnen:**
- Android Studio lädt Gradle-Dependencies herunter (5-10 Minuten)
- Warte bis "Gradle sync finished" unten erscheint

### 5.3 Im Emulator testen

**Emulator erstellen (falls noch nicht vorhanden):**
1. In Android Studio: `Tools → Device Manager`
2. `Create Device` klicken
3. Hardware wählen: z.B. "Pixel 5" → Next
4. System Image: API 33 (Android 13) → Download → Next
5. Name: "Test-Device" → Finish

**App starten:**
1. Oben in Android Studio: Wähle "app" + dein Emulator
2. Klicke grünen Play-Button (▶️)
3. Emulator startet (dauert 1-2 Minuten beim ersten Mal)
4. App wird installiert und gestartet

**Erwartetes Ergebnis:** Deine IdeenFunke-App läuft im Emulator! 🎉

---

## TEIL 6: Release-Version erstellen

### 6.1 Keystore erstellen (für App-Signierung)

**Was ist ein Keystore?**
- Digitale Signatur für deine App
- EXTREM WICHTIG: Wenn du den Keystore verlierst, kannst du die App nie mehr updaten!
- Sicher aufbewahren (z.B. USB-Stick + Cloud-Backup)

**Keystore erstellen:**

```bash
cd android/app
keytool -genkey -v -keystore ideenfunke-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias ideenfunke
```

**Interaktive Fragen:**
- Passwort: **MERKEN!** (z.B. IdeenFunke2025!)
- Vorname/Nachname: Dein Name
- Organisationseinheit: z.B. "Elementarpädagogik"
- Organisation: Dein Name oder leer
- Stadt: z.B. Wien
- Bundesland: z.B. Wien
- Ländercode: AT

**BACKUP:** Kopiere `ideenfunke-release-key.jks` sofort an 2 sichere Orte!

### 6.2 Signing-Konfiguration

Erstelle `android/key.properties`:

```properties
storePassword=DEIN_PASSWORT
keyPassword=DEIN_PASSWORT
keyAlias=ideenfunke
storeFile=ideenfunke-release-key.jks
```

**WICHTIG:** Füge zu `.gitignore` hinzu:
```
android/app/ideenfunke-release-key.jks
android/key.properties
```

Öffne `android/app/build.gradle` und füge OBERHALB von `android {` ein:

```gradle
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}
```

Und innerhalb von `android {` ergänze:

```gradle
android {
    ...

    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
            storePassword keystoreProperties['storePassword']
        }
    }

    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
```

### 6.3 App-Version und Details setzen

Öffne `android/app/build.gradle` und finde:

```gradle
android {
    ...
    defaultConfig {
        applicationId "at.ideenfunke.app"
        minSdkVersion 22
        targetSdkVersion 33
        versionCode 1          // Bei jedem Update erhöhen: 2, 3, 4...
        versionName "1.0.0"    // Für User sichtbar: 1.0.0, 1.0.1, 1.1.0...
    }
}
```

### 6.4 AAB (Android App Bundle) erstellen

**In Android Studio:**
1. `Build → Generate Signed Bundle / APK`
2. Wähle `Android App Bundle` → Next
3. Key store path: Browse zu `android/app/ideenfunke-release-key.jks`
4. Passwörter eingeben
5. Build variant: `release`
6. Signature versions: ✅ V1, ✅ V2 beide aktiviert
7. `Create` klicken

**Oder via Terminal:**
```bash
cd android
./gradlew bundleRelease
```

**Ergebnis:** `android/app/build/outputs/bundle/release/app-release.aab`

---

## TEIL 7: Google Play Store Vorbereitung

### 7.1 Google Play Developer Account erstellen

1. Gehe zu: https://play.google.com/console/signup
2. Registriere dich mit Google-Account
3. Zahle 25 USD Registrierungsgebühr (einmalig!)
4. Fülle Developer-Profil aus

**Dauer:** Account-Freischaltung dauert 1-2 Tage.

### 7.2 App-Listing erstellen

**Benötigte Assets:**

**Screenshots (WICHTIG!):**
- Mindestens 2, empfohlen 4-8
- Handy-Screenshots: 1080 x 1920 px oder höher
- Zeige wichtigste Features: Altersauswahl, Filter, Aktivitäten

**So erstellst du Screenshots:**
1. Starte App im Emulator
2. Klicke Screenshot-Button in Emulator (Kamera-Icon)
3. Oder nutze Windows Snipping Tool

**Feature Graphic:**
- 1024 x 500 px
- Banner-Bild mit App-Name und Logo
- Erstelle mit Canva (kostenlos) oder Photoshop

**App-Icon (High-Res):**
- 512 x 512 px
- Wird im Play Store angezeigt

### 7.3 Store Listing Text

**App-Titel:** (max. 50 Zeichen)
```
IdeenFunke - Aktivitäten für die Elementarpädagogik
```

**Kurzbeschreibung:** (max. 80 Zeichen)
```
Evidenzbasierte Aktivitätsvorschläge für Krippe, Kindergarten & Schulvorbereitung
```

**Vollständige Beschreibung:** (max. 4000 Zeichen)

```
IdeenFunke unterstützt Elementarpädagog:innen mit über 135 evidenzbasierten Aktivitäten für Kinder von 1-6 Jahren.

🎯 FÜR WEN?
• Kindergartenpädagog:innen
• Krippenbetreuer:innen
• Tageseltern
• Frühe Hilfen Fachkräfte

✨ FEATURES:
• 3 Altersgruppen: Krippe (1-3 J.), Kindergarten (3-5 J.), Schulvorbereitung (5-6 J.)
• Filter nach 6 Bildungsbereichen (Österr. Bildungsrahmenplan)
• 17 Themen: Jahreszeiten, Feste, beliebte Themen
• Anzeige von Entwicklungszielen (Feinmotorik, Sprache, Kreativität, etc.)
• Materiallisten und Zeitangaben
• Konkrete Durchführungsanleitungen

📚 BILDUNGSBEREICHE:
• Emotionen und soziale Beziehungen
• Ethik und Gesellschaft
• Sprache und Kommunikation
• Bewegung und Gesundheit
• Gesundheit und Wohlbefinden
• Ästhetik und Gestaltung

🌸 THEMEN:
Frühling, Sommer, Herbst, Winter, Ostern, Weihnachten, Fasching, Erntedank, Tiere, Bauernhof, Wald, Farben, Körper, Fahrzeuge, Familie, Wasser

💡 WARUM IDEENFUNKE?
• Schneller Zugriff auf entwicklungsgerechte Aktivitäten
• Evidenzbasiert (aktuelle pädagogische Forschung)
• Praktisch erprobt aus 10 Jahren Kindergartenpraxis
• Klar strukturiert und übersichtlich

🇦🇹 Entwickelt in Österreich nach dem österreichischen Bildungsrahmenplan für elementare Bildungseinrichtungen.

---

Diese App ist Werbefrei und ohne In-App-Käufe. Alle Aktivitäten sind sofort verfügbar.
```

### 7.4 Kategorie & Inhaltsfreigabe

**Kategorie:**
- Hauptkategorie: `Lernen` (Education)
- Unterkategorie: `Frühe Bildung` (Early Education)

**Inhaltsfreigabe:**
- Zielgruppe: Erwachsene
- Keine sensiblen Inhalte
- Keine Werbung
- Keine In-App-Käufe

**Datenschutzerklärung:**
Da deine App keine Daten sammelt, erstelle eine simple Privacy Policy:

```markdown
# Datenschutzerklärung IdeenFunke

IdeenFunke sammelt, speichert oder überträgt keinerlei persönliche Daten.

Alle Daten bleiben lokal auf Ihrem Gerät.

Kontakt: [deine-email@example.com]
Stand: [Datum]
```

Hoste diese z.B. als GitHub Gist oder auf einer eigenen Website.

---

## TEIL 8: App hochladen und veröffentlichen

### 8.1 Im Play Console

1. Gehe zu https://play.google.com/console
2. Klicke "App erstellen"
3. Fülle aus:
   - App-Name: IdeenFunke
   - Standardsprache: Deutsch (Österreich)
   - App/Spiel: App
   - Kostenlos/Kostenpflichtig: Kostenlos

### 8.2 App-Bundle hochladen

1. Linke Sidebar: `Release → Production → Neues Release erstellen`
2. Upload der AAB-Datei: `app-release.aab`
3. Release-Name: z.B. "Version 1.0.0 - Initial Release"
4. Release-Hinweise (Deutsch):
   ```
   Erste Version von IdeenFunke!
   • 135 Aktivitäten für Krippe, Kindergarten und Schulvorbereitung
   • Filterung nach Bildungsbereichen und Themen
   • Anzeige von Entwicklungszielen
   ```

### 8.3 Content Rating (Inhaltsbewertung)

1. `Richtlinien → App-Inhalt → Inhaltsfreigabe`
2. Fragebogen ausfüllen (z.B. IARC)
3. Keine Gewalt, keine sexuellen Inhalte, etc.
4. Ergebnis: Für alle Altersgruppen freigegeben

### 8.4 Weitere Anforderungen

**Zielbereiche:**
- ✅ Land: Österreich (und optional: Deutschland, Schweiz)

**Store-Präsenz → Store-Eintrag:**
- Screenshots hochladen (min. 2)
- Feature Graphic hochladen
- App-Icon hochladen
- Beschreibungstexte einfügen

**Datenschutz:**
- Link zu Privacy Policy einfügen

### 8.5 App zur Überprüfung einreichen

1. Überprüfe alle Checklisten (rote Punkte müssen grün werden)
2. Klicke `Zur Überprüfung senden`
3. Google prüft die App (dauert 1-3 Tage, manchmal auch Stunden)

**Status-Updates:**
- "In Prüfung" → abwarten
- "Genehmigt" → App ist live! 🎉
- "Abgelehnt" → Feedback lesen, Probleme beheben, erneut einreichen

---

## TEIL 9: Updates veröffentlichen

### 9.1 Code-Änderungen

Wenn du deine Web-App änderst:

```bash
# 1. Änderungen in HTML/CSS/JS machen
# 2. Web-Assets aktualisieren
npx cap sync

# 3. Version erhöhen in android/app/build.gradle
# versionCode: 2
# versionName: "1.0.1"

# 4. Neues Bundle erstellen
cd android
./gradlew bundleRelease
```

### 9.2 Update im Play Store

1. Play Console → `Release → Production → Neues Release erstellen`
2. Neues AAB hochladen
3. Release-Hinweise schreiben (Was ist neu?)
4. Zur Überprüfung senden

---

## TEIL 10: Troubleshooting

### Problem: `adb not found`
**Lösung:** Umgebungsvariablen nochmal überprüfen, Computer neu starten

### Problem: Gradle build failed
**Lösung:**
```bash
cd android
./gradlew clean
./gradlew build
```

### Problem: App stürzt im Emulator ab
**Lösung:** Logcat überprüfen in Android Studio (unten: Logcat-Tab)

### Problem: "Webseite nicht verfügbar" in der App
**Lösung:**
1. Überprüfe `capacitor.config.json` → `webDir` muss korrekt sein
2. Führe `npx cap sync` nochmal aus
3. Stelle sicher dass alle Dateipfade in HTML relativ sind (nicht absolut)

### Problem: Icons werden nicht angezeigt
**Lösung:** Nutze `npx capacitor-assets generate` für automatische Icon-Generierung

---

## TEIL 11: Kosten-Übersicht

| Was | Kosten |
|-----|--------|
| Google Play Developer Account | 25 USD einmalig |
| Capacitor (Open Source) | Kostenlos |
| Android Studio | Kostenlos |
| App-Hosting im Play Store | Kostenlos |
| **GESAMT** | **25 USD** |

---

## TEIL 12: Zeitplan

| Phase | Dauer (Erstmalig) |
|-------|-------------------|
| Software installieren | 1-2 Stunden |
| Capacitor Setup | 30 Minuten |
| Erste Build & Test | 30 Minuten |
| Release-Konfiguration | 1 Stunde |
| Play Store Account + Listing | 1-2 Stunden |
| Upload & Veröffentlichung | 30 Minuten |
| Google Prüfung | 1-3 Tage (automatisch) |
| **GESAMT** | **ca. 4-6 Stunden Arbeit + Wartezeit** |

Bei zukünftigen Updates: nur 30-60 Minuten!

---

## Nächste Schritte

1. ☐ Node.js installieren
2. ☐ Android Studio installieren
3. ☐ Umgebungsvariablen setzen
4. ☐ Capacitor installieren und initialisieren
5. ☐ Erste Build im Emulator testen
6. ☐ Keystore erstellen und SICHERN
7. ☐ Release-AAB erstellen
8. ☐ Google Play Developer Account anlegen
9. ☐ Screenshots und Assets vorbereiten
10. ☐ App hochladen und einreichen

---

## Hilfreiche Links

- Capacitor Docs: https://capacitorjs.com/docs
- Android Studio: https://developer.android.com/studio
- Play Console: https://play.google.com/console
- Icon Kitchen (Icon-Generator): https://icon.kitchen/
- Canva (Feature Graphic): https://www.canva.com/

---

**Bei Problemen:** Google "capacitor android [dein Problem]" - die Capacitor-Community ist sehr aktiv und hilfsbereit!

**Viel Erfolg! 🚀**
