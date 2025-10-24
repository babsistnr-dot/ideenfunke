/**
 * IdeenFunke - Aktivitätsdatenbank
 * Datenstruktur basierend auf DATA.md
 */

const activities = [
    // ===== Babys (0-1 Jahr) =====
    {
        id: 1,
        title: "Sinnesschätze entdecken",
        ageGroup: "babies",
        areas: ["natur"],
        materials: ["Stoffsäckchen", "Naturmaterialien (Tannenzapfen, glatte Steine)", "weiche Tücher"],
        duration: "10-15 Min",
        description: "Babys erkunden verschiedene Naturmaterialien mit allen Sinnen - Tasten, Sehen, Riechen.",
        shortInstruction: "Lege verschiedene Naturmaterialien bereit und lass das Baby diese unter Aufsicht mit Händen und Mund erkunden."
    },
    {
        id: 2,
        title: "Kuckuck-Spiele",
        ageGroup: "babies",
        areas: ["emotionen"],
        materials: ["Tuch", "eigene Hände"],
        duration: "5-10 Min",
        description: "Klassisches Versteckspiel zur Förderung der Objektpermanenz und sozialen Bindung.",
        shortInstruction: "Verstecke dein Gesicht hinter einem Tuch oder deinen Händen und tauche mit 'Kuckuck!' wieder auf."
    },
    {
        id: 3,
        title: "Spiegelspiele",
        ageGroup: "babies",
        areas: ["emotionen"],
        materials: ["Babysicherer Spiegel", "weiche Unterlage"],
        duration: "5-10 Min",
        description: "Babys entdecken ihr Spiegelbild und entwickeln ein erstes Selbstbewusstsein.",
        shortInstruction: "Platziere einen sicheren Spiegel vor dem Baby und lass es sein Spiegelbild betrachten und mit Mimik experimentieren."
    },
    {
        id: 4,
        title: "Bewegungslieder",
        ageGroup: "babies",
        areas: ["bewegung", "sprache"],
        materials: ["keine"],
        duration: "10-15 Min",
        description: "Einfache Lieder mit Bewegungen fördern Rhythmusgefühl und Motorik.",
        shortInstruction: "Singe bekannte Kinderlieder wie 'Hoppe hoppe Reiter' und unterstütze die Bewegungen des Babys."
    },
    {
        id: 5,
        title: "Knisterdecke erforschen",
        ageGroup: "babies",
        areas: ["natur"],
        materials: ["Knisterpapier", "verschiedene Stoffe", "sichere Befestigung"],
        duration: "10-15 Min",
        description: "Unterschiedliche Materialien laden zum Tasten und Greifen ein.",
        shortInstruction: "Erstelle eine Decke mit verschiedenen taktilen Elementen und lass das Baby diese erkunden."
    },
    {
        id: 6,
        title: "Wasserspiele beim Wickeln",
        ageGroup: "babies",
        areas: ["gesundheit"],
        materials: ["lauwarmes Wasser", "weiche Schwämme", "Waschlappen"],
        duration: "5-10 Min",
        description: "Sanfte Wasserreize fördern die sensorische Wahrnehmung.",
        shortInstruction: "Lass das Baby beim Wickeln mit Wasser spielen und verschiedene Temperaturen und Berührungen erleben."
    },
    {
        id: 7,
        title: "Greifübungen mit Tüchern",
        ageGroup: "babies",
        areas: ["bewegung"],
        materials: ["bunte Tücher", "Chiffonstoffe"],
        duration: "10 Min",
        description: "Leichte Tücher fördern die Hand-Auge-Koordination und Greifreflex.",
        shortInstruction: "Halte bunte Tücher in Reichweite und ermutige das Baby zum Greifen und Loslassen."
    },
    {
        id: 8,
        title: "Klangschale erleben",
        ageGroup: "babies",
        areas: ["natur"],
        materials: ["Klangschale", "weicher Schlägel"],
        duration: "5-10 Min",
        description: "Sanfte Klänge beruhigen und fördern die auditive Wahrnehmung.",
        shortInstruction: "Schlage vorsichtig die Klangschale an und lass das Baby die Vibrationen spüren."
    },
    {
        id: 9,
        title: "Babygymnastik",
        ageGroup: "babies",
        areas: ["bewegung", "gesundheit"],
        materials: ["weiche Matte", "eventuell Musik"],
        duration: "10-15 Min",
        description: "Sanfte Bewegungsübungen unterstützen die motorische Entwicklung.",
        shortInstruction: "Führe spielerisch Beinchen-Radfahren, Ärmchen-Strecken und Dreh-Übungen durch."
    },
    {
        id: 10,
        title: "Fühlbuch erkunden",
        ageGroup: "babies",
        areas: ["sprache", "natur"],
        materials: ["Stoffbuch", "verschiedene Texturen"],
        duration: "5-10 Min",
        description: "Bücher mit verschiedenen Oberflächen laden zum Fühlen und ersten 'Lesen' ein.",
        shortInstruction: "Zeige dem Baby ein Fühlbuch und benenne dabei die verschiedenen Texturen und Bilder."
    },
    {
        id: 11,
        title: "Rassel-Orchester",
        ageGroup: "babies",
        areas: ["natur"],
        materials: ["verschiedene Rasseln", "Greiflinge mit Geräuschen"],
        duration: "10 Min",
        description: "Verschiedene Geräusche schulen das Gehör und die Ursache-Wirkungs-Erkennung.",
        shortInstruction: "Biete verschiedene klingende Gegenstände an und zeige die Zusammenhänge zwischen Bewegung und Geräusch."
    },
    {
        id: 12,
        title: "Fingerspiele",
        ageGroup: "babies",
        areas: ["sprache", "emotionen"],
        materials: ["eigene Hände"],
        duration: "5-10 Min",
        description: "Einfache Reime mit Fingerbewegungen fördern Sprachentwicklung und Bindung.",
        shortInstruction: "Spiele bekannte Fingerspiele wie 'Das ist der Daumen' mit klaren Bewegungen."
    },
    {
        id: 13,
        title: "Lichtspiele",
        ageGroup: "babies",
        areas: ["natur"],
        materials: ["Taschenlampe", "buntes Transparentpapier"],
        duration: "5-10 Min",
        description: "Sanfte Lichteffekte faszinieren und schulen die visuelle Wahrnehmung.",
        shortInstruction: "Projiziere sanfte, farbige Lichtpunkte an Wand oder Decke und lass das Baby diese verfolgen."
    },
    {
        id: 14,
        title: "Schaukeln und Wiegen",
        ageGroup: "babies",
        areas: ["bewegung", "emotionen"],
        materials: ["eigene Arme", "Tuch oder Hängematte"],
        duration: "5-15 Min",
        description: "Rhythmisches Schaukeln beruhigt und fördert den Gleichgewichtssinn.",
        shortInstruction: "Wiege das Baby sanft in deinen Armen oder in einem Tuch zu ruhiger Musik oder Summen."
    },
    {
        id: 15,
        title: "Pusten-Spiele",
        ageGroup: "babies",
        areas: ["gesundheit", "emotionen"],
        materials: ["Seifenblasen", "Federn"],
        duration: "5-10 Min",
        description: "Das Beobachten von schwebenden Objekten fasziniert und fördert die Augenfolgebewegung.",
        shortInstruction: "Puste sanft Seifenblasen oder lass Federn durch die Luft schweben - das Baby beobachtet und greift vielleicht danach."
    },

    // ===== Altersgruppe 1-2 Jahre =====
    {
        id: 16,
        title: "Schüttübungen mit Alltagsmaterial",
        ageGroup: "krippe",
        areas: ["bewegung"],
        materials: ["Plastikflaschen", "Reis, Linsen, Wasser", "stabiler Untergrund"],
        duration: "15-20 Min",
        description: "Kinder üben die Feinmotorik durch Schütten und Umfüllen.",
        shortInstruction: "Biete verschiedene Schüttmaterialien und Gefäße an - begleite sprachlich das Tun."
    },
    {
        id: 17,
        title: "Tierlaute-Memory",
        ageGroup: "krippe",
        areas: ["sprache", "natur"],
        materials: ["Bilder von Tieren", "eigene Stimme"],
        duration: "10-15 Min",
        description: "Kinder lernen Tierlaute kennen und erweitern ihren Wortschatz.",
        shortInstruction: "Zeige Tierbilder und mache die entsprechenden Laute - ermutige zur Nachahmung."
    },
    {
        id: 18,
        title: "Hindernisparcours",
        ageGroup: "krippe",
        areas: ["bewegung"],
        materials: ["Kissen", "Kartons", "Decken"],
        duration: "15-20 Min",
        description: "Einfacher Bewegungsparcours fördert Grobmotorik und Raumwahrnehmung.",
        shortInstruction: "Baue einen sicheren Parcours mit Kissen zum Drüberklettern und Decken zum Durchkriechen."
    },
    {
        id: 19,
        title: "Erste Mal-Erfahrungen",
        ageGroup: "krippe",
        areas: ["natur"],
        materials: ["essbare Fingerfarben", "großes Papier", "Schürze"],
        duration: "15-20 Min",
        description: "Freies Malen mit den Händen fördert Kreativität und sensorische Erfahrungen.",
        shortInstruction: "Lasse das Kind frei mit Fingerfarben experimentieren - ohne Erwartungen, nur Prozess."
    },
    {
        id: 20,
        title: "Bauklötze stapeln",
        ageGroup: "krippe",
        areas: ["natur"],
        materials: ["große Bauklötze", "weiche Unterlage"],
        duration: "15-20 Min",
        description: "Stapeln und Umwerfen schult Hand-Auge-Koordination und Ursache-Wirkungs-Denken.",
        shortInstruction: "Biete stabile Bausteine an und zeige Stapeln - feiere gemeinsam das Umwerfen."
    },
    {
        id: 21,
        title: "Wasserschöpfen",
        ageGroup: "krippe",
        areas: ["gesundheit", "natur"],
        materials: ["zwei Schüsseln", "Wasser", "Becher, Löffel"],
        duration: "20 Min",
        description: "Einfaches Wasserschöpfen beruhigt und schult Feinmotorik.",
        shortInstruction: "Fülle eine Schüssel mit Wasser und lass das Kind mit verschiedenen Gefäßen schöpfen."
    },
    {
        id: 22,
        title: "Tanzspiele",
        ageGroup: "krippe",
        areas: ["bewegung", "emotionen"],
        materials: ["Musik", "Raum zum Bewegen"],
        duration: "10-15 Min",
        description: "Freies Tanzen zu verschiedenen Rhythmen fördert Körpergefühl und Freude.",
        shortInstruction: "Spiele verschiedene Musikstile und tanze mit - ermutige zu eigenen Bewegungen."
    },
    {
        id: 23,
        title: "Sortierspiele",
        ageGroup: "krippe",
        areas: ["natur"],
        materials: ["verschiedene Gegenstände", "Schachteln"],
        duration: "15 Min",
        description: "Einfaches Sortieren nach Größe oder Farbe fördert kognitives Denken.",
        shortInstruction: "Biete 2-3 verschiedene Objektarten an und zeige, wie man sie in Behälter sortiert."
    },
    {
        id: 24,
        title: "Bilderbuch-Zeit",
        ageGroup: "krippe",
        areas: ["sprache", "emotionen"],
        materials: ["stabile Bilderbücher", "gemütliche Sitzgelegenheit"],
        duration: "10-15 Min",
        description: "Gemeinsames Betrachten von Büchern fördert Sprache und emotionale Nähe.",
        shortInstruction: "Schaue gemeinsam Bücher an, benenne Bilder und stelle einfache Fragen."
    },
    {
        id: 25,
        title: "Knetmasse erforschen",
        ageGroup: "krippe",
        areas: ["natur"],
        materials: ["selbstgemachte Knetmasse", "Ausstechformen"],
        duration: "15-20 Min",
        description: "Kneten stärkt Handmuskulatur und bietet sensorische Erfahrungen.",
        shortInstruction: "Stelle sichere Knetmasse bereit und lass das Kind frei formen, drücken und reißen."
    },
    {
        id: 26,
        title: "Ball-Spiele",
        ageGroup: "krippe",
        areas: ["bewegung"],
        materials: ["weiche Bälle in verschiedenen Größen"],
        duration: "15 Min",
        description: "Rollen und Werfen fördern Koordination und soziale Interaktion.",
        shortInstruction: "Rolle Bälle hin und her, wirf sie in Körbe oder lass sie kullern."
    },
    {
        id: 27,
        title: "Natur-Schatzsuche",
        ageGroup: "krippe",
        areas: ["natur", "bewegung"],
        materials: ["Körbchen", "Garten oder Park"],
        duration: "20-30 Min",
        description: "Draußen kleine Schätze sammeln fördert Naturverbindung und Bewegung.",
        shortInstruction: "Gehe mit dem Kind nach draußen und sammle Blätter, Steine oder Stöcke in ein Körbchen."
    },
    {
        id: 28,
        title: "Steckspiele",
        ageGroup: "krippe",
        areas: ["natur"],
        materials: ["Steckbox", "verschiedene Formen"],
        duration: "10-15 Min",
        description: "Formen zuordnen schult Problemlösung und Feinmotorik.",
        shortInstruction: "Biete eine Formbox an und zeige, wie Formen durch passende Öffnungen gesteckt werden."
    },
    {
        id: 29,
        title: "Gemeinsames Aufräumen",
        ageGroup: "krippe",
        areas: ["ethik"],
        materials: ["Spielzeug", "Aufbewahrungsboxen"],
        duration: "10 Min",
        description: "Spielerisches Aufräumen fördert erste Verantwortung und Selbständigkeit.",
        shortInstruction: "Mache ein Spiel aus dem Aufräumen - singe dazu oder mache ein Wettrennen."
    },
    {
        id: 30,
        title: "Geräusche-Raten",
        ageGroup: "krippe",
        areas: ["sprache", "natur"],
        materials: ["Haushaltsgegenstände", "Tuch zum Verdecken"],
        duration: "10 Min",
        description: "Verschiedene Geräusche erkennen schult auditives Gedächtnis.",
        shortInstruction: "Erzeuge Geräusche mit Alltagsgegenständen und lass das Kind raten oder den Gegenstand finden."
    },

    // ===== Altersgruppe 2-3 Jahre =====
    {
        id: 31,
        title: "Rollenspiel 'Einkaufen'",
        ageGroup: "krippe",
        areas: ["ethik", "sprache"],
        materials: ["Spiellebensmittel", "Tasche", "Kasse (optional)"],
        duration: "20-30 Min",
        description: "Kinder spielen Alltagssituationen nach und erweitern soziale Kompetenzen.",
        shortInstruction: "Richte einen kleinen Laden ein und spiele verschiedene Rollen - Verkäufer/Kunde."
    },
    {
        id: 32,
        title: "Farben-Sortier-Spiel",
        ageGroup: "krippe",
        areas: ["natur"],
        materials: ["bunte Gegenstände", "farbige Schalen"],
        duration: "15-20 Min",
        description: "Sortieren nach Farben fördert Farbkenntnis und Kategorisierung.",
        shortInstruction: "Stelle farbige Schalen bereit und lass Kinder passende Gegenstände zuordnen."
    },
    {
        id: 33,
        title: "Schattenspiele",
        ageGroup: "krippe",
        areas: ["natur"],
        materials: ["Lichtquelle", "Hände und Gegenstände"],
        duration: "15 Min",
        description: "Schatten an der Wand erzeugen fasziniert und erklärt physikalische Phänomene.",
        shortInstruction: "Verdunkle den Raum leicht und erzeuge mit Händen oder Figuren Schatten an der Wand."
    },
    {
        id: 34,
        title: "Gefühle-Gesichter",
        ageGroup: "krippe",
        areas: ["emotionen", "sprache"],
        materials: ["Spiegel", "Bilder von Gesichtern", "Pappteller"],
        duration: "20 Min",
        description: "Verschiedene Emotionen kennenlernen und benennen fördert emotionale Intelligenz.",
        shortInstruction: "Zeige verschiedene Gesichtsausdrücke im Spiegel und benenne die Gefühle - male sie auf."
    },
    {
        id: 35,
        title: "Matschtisch",
        ageGroup: "krippe",
        areas: ["natur", "gesundheit"],
        materials: ["Sand", "Wasser", "Schaufeln", "Förmchen"],
        duration: "30 Min",
        description: "Freies Experimentieren mit Sand und Wasser bietet sensorische Vielfalt.",
        shortInstruction: "Richte einen Matschtisch ein und lass Kinder frei experimentieren - ohne Ergebnisorientierung."
    },
    {
        id: 36,
        title: "Rhythmus-Werkstatt",
        ageGroup: "krippe",
        areas: ["sprache"],
        materials: ["einfache Instrumente", "Töpfe", "Kochlöffel"],
        duration: "15-20 Min",
        description: "Gemeinsames Musizieren fördert Rhythmusgefühl und Gemeinschaftssinn.",
        shortInstruction: "Verteile Instrumente und experimentiert gemeinsam mit Rhythmen und Klängen."
    },
    {
        id: 37,
        title: "Balancier-Pfad",
        ageGroup: "krippe",
        areas: ["bewegung", "gesundheit"],
        materials: ["Seil oder Kreppband am Boden", "Balancierbalken"],
        duration: "20 Min",
        description: "Balancieren schult Gleichgewicht und Körperbeherrschung.",
        shortInstruction: "Lege einen Balancierpfad aus und zeige, wie man vorsichtig darüber geht."
    },
    {
        id: 38,
        title: "Puzzle-Zeit",
        ageGroup: "krippe",
        areas: ["natur"],
        materials: ["altersgerechte Puzzles (4-12 Teile)"],
        duration: "15-20 Min",
        description: "Puzzeln fördert räumliches Denken und Geduld.",
        shortInstruction: "Biete verschiedene Puzzles an und unterstütze bei Bedarf - feiere Erfolge."
    },
    {
        id: 39,
        title: "Puppentheater",
        ageGroup: "krippe",
        areas: ["sprache", "emotionen"],
        materials: ["Handpuppen", "improvisierte Bühne"],
        duration: "15-20 Min",
        description: "Geschichten mit Puppen erzählen fördert Fantasie und Sprachverständnis.",
        shortInstruction: "Führe kleine Geschichten mit Puppen auf oder lass Kinder selbst spielen."
    },
    {
        id: 40,
        title: "Schneiden üben",
        ageGroup: "krippe",
        areas: ["bewegung"],
        materials: ["Kinderschere", "dickes Papier", "Vorlagen"],
        duration: "15 Min",
        description: "Erste Schneideversuche stärken Handmuskulatur und Konzentration.",
        shortInstruction: "Zeige, wie man eine Schere hält und biete dicke Papierstreifen zum Üben an."
    },
    {
        id: 41,
        title: "Reimspiele",
        ageGroup: "krippe",
        areas: ["sprache"],
        materials: ["Bildkarten", "Reimbücher"],
        duration: "10-15 Min",
        description: "Reime erkennen und bilden fördert phonologische Bewusstheit.",
        shortInstruction: "Spiele einfache Reimspiele wie 'Ich sehe was, was du nicht siehst, und das reimt sich auf...'"
    },
    {
        id: 42,
        title: "Tier-Bewegungen",
        ageGroup: "krippe",
        areas: ["bewegung", "natur"],
        materials: ["Raum zum Bewegen", "evtl. Tierbilder"],
        duration: "15 Min",
        description: "Tiere nachahmen macht Spaß und fördert grobmotorische Fähigkeiten.",
        shortInstruction: "Zeige Tierbewegungen vor (hüpfen wie Frosch, schleichen wie Katze) und lass Kinder nachahmen."
    },
    {
        id: 43,
        title: "Gemeinsames Backen",
        ageGroup: "krippe",
        areas: ["gesundheit", "natur"],
        materials: ["einfache Zutaten", "Rührschüssel", "kindersichere Werkzeuge"],
        duration: "30-40 Min",
        description: "Einfache Backaktivitäten fördern Feinmotorik und Verständnis für Zubereitung.",
        shortInstruction: "Backe etwas Einfaches wie Kekse - lass Kinder rühren, kneten und formen."
    },
    {
        id: 44,
        title: "Spurenlesen im Sand",
        ageGroup: "krippe",
        areas: ["natur"],
        materials: ["Sandkasten", "verschiedene Gegenstände zum Abdruck"],
        duration: "20 Min",
        description: "Muster und Spuren im Sand erforschen fördert Beobachtungsgabe.",
        shortInstruction: "Drücke verschiedene Gegenstände in Sand und lass Kinder die Muster erforschen und zuordnen."
    },
    {
        id: 45,
        title: "Gefühls-Geschichten",
        ageGroup: "krippe",
        areas: ["emotionen", "sprache"],
        materials: ["Bilderbücher über Gefühle", "Kuscheltiere"],
        duration: "15-20 Min",
        description: "Geschichten über Emotionen helfen, eigene Gefühle zu verstehen.",
        shortInstruction: "Lies Geschichten über verschiedene Emotionen und spreche über eigene Erlebnisse."
    },

    // ===== Altersgruppe 3-6 Jahre =====
    {
        id: 46,
        title: "Experimentier-Station: Schwimmen und Sinken",
        ageGroup: "kiga",
        areas: ["natur"],
        materials: ["Wasserbecken", "verschiedene Gegenstände", "Schürzen"],
        duration: "30-40 Min",
        description: "Kinder untersuchen, welche Materialien schwimmen oder sinken und stellen Hypothesen auf.",
        shortInstruction: "Stelle verschiedene Gegenstände bereit, lass Kinder Vermutungen anstellen und dann testen."
    },
    {
        id: 47,
        title: "Zahlenweg im Garten",
        ageGroup: "kiga",
        areas: ["natur"],
        materials: ["Kreide oder Zahlenkarten", "Outdoor-Bereich"],
        duration: "20-30 Min",
        description: "Bewegtes Lernen verbindet Mathematik mit Motorik.",
        shortInstruction: "Lege einen Zahlenweg von 1-10 an und lass Kinder hüpfend oder gehend die Zahlen erkunden."
    },
    {
        id: 48,
        title: "Geschichten-Werkstatt",
        ageGroup: "kiga",
        areas: ["sprache", "emotionen"],
        materials: ["Papier", "Stifte", "evtl. digitale Aufnahme"],
        duration: "30-40 Min",
        description: "Kinder erfinden eigene Geschichten und entwickeln narrative Fähigkeiten.",
        shortInstruction: "Beginne eine Geschichte und lass Kinder weitererzählen - schreibe oder nehme auf."
    },
    {
        id: 49,
        title: "Regelspiele einführen",
        ageGroup: "kiga",
        areas: ["ethik"],
        materials: ["altersgerechte Brettspiele", "Würfel", "Spielfiguren"],
        duration: "20-30 Min",
        description: "Gesellschaftsspiele fördern Regelverständnis und Sozialverhalten.",
        shortInstruction: "Spiele einfache Brettspiele und begleite beim Lernen von Regeln, Warten und Verlieren."
    },
    {
        id: 50,
        title: "Yoga für Kinder",
        ageGroup: "kiga",
        areas: ["bewegung", "gesundheit"],
        materials: ["Matten", "ruhige Musik", "Bildkarten mit Tier-Posen"],
        duration: "20-30 Min",
        description: "Kindgerechte Yoga-Übungen fördern Körperbewusstsein und Entspannung.",
        shortInstruction: "Führe einfache Tier-Yoga-Posen ein (Hund, Katze, Baum) und verbinde mit Atemübungen."
    },
    {
        id: 51,
        title: "Forschertagebuch",
        ageGroup: "kiga",
        areas: ["natur", "sprache"],
        materials: ["Notizbücher", "Stifte", "Lupen", "Kamera"],
        duration: "30 Min",
        description: "Beobachtungen dokumentieren fördert wissenschaftliches Denken.",
        shortInstruction: "Gehe mit Kindern nach draußen, beobachte Natur und dokumentiere durch Zeichnen oder Fotos."
    },
    {
        id: 52,
        title: "Konflikte lösen lernen",
        ageGroup: "kiga",
        areas: ["ethik", "emotionen"],
        materials: ["Bildkarten zu Konfliktsituationen", "Kuscheltier als 'Friedensbringer'"],
        duration: "20 Min",
        description: "Rollenspiele zu Konflikten helfen, Lösungsstrategien zu entwickeln.",
        shortInstruction: "Spiele typische Konflikte nach und erarbeite gemeinsam Lösungswege."
    },
    {
        id: 53,
        title: "Buchstaben-Jagd",
        ageGroup: "kiga",
        areas: ["sprache"],
        materials: ["Buchstabenkarten", "Alltagsgegenstände"],
        duration: "20-30 Min",
        description: "Spielerisch Buchstaben im Alltag entdecken fördert Schriftbewusstsein.",
        shortInstruction: "Suche mit Kindern Gegenstände, die mit bestimmten Buchstaben beginnen."
    },
    {
        id: 54,
        title: "Kreativ-Werkstatt",
        ageGroup: "kiga",
        areas: ["natur"],
        materials: ["Recyclingmaterial", "Kleber", "Scheren", "Farben"],
        duration: "40-60 Min",
        description: "Freies Gestalten mit verschiedenen Materialien fördert Kreativität.",
        shortInstruction: "Stelle vielfältige Materialien bereit und lass Kinder eigene Kunstwerke erschaffen - ohne Vorgaben."
    },
    {
        id: 55,
        title: "Bewegungsgeschichte",
        ageGroup: "kiga",
        areas: ["bewegung", "sprache"],
        materials: ["Raum zum Bewegen", "evtl. Musik"],
        duration: "20-30 Min",
        description: "Geschichten werden in Bewegung umgesetzt und körperlich erlebt.",
        shortInstruction: "Erzähle eine Geschichte und lass Kinder die beschriebenen Bewegungen ausführen."
    },
    {
        id: 56,
        title: "Kulturelle Vielfalt entdecken",
        ageGroup: "kiga",
        areas: ["ethik"],
        materials: ["Weltkarte", "Bilder", "Musik aus verschiedenen Ländern"],
        duration: "30 Min",
        description: "Verschiedene Kulturen kennenlernen fördert Offenheit und Toleranz.",
        shortInstruction: "Stelle ein Land vor, zeige auf der Karte, höre Musik und probiere evtl. Essen."
    },
    {
        id: 57,
        title: "Mengen und Zahlen begreifen",
        ageGroup: "kiga",
        areas: ["natur"],
        materials: ["Naturmaterialien", "Zahlenkarten", "Schalen"],
        duration: "20-30 Min",
        description: "Mathematische Konzepte mit konkreten Materialien erfahren.",
        shortInstruction: "Zähle, sortiere und vergleiche Mengen mit Steinen, Kastanien oder Bohnen."
    },
    {
        id: 58,
        title: "Wetterbeobachtung",
        ageGroup: "kiga",
        areas: ["natur"],
        materials: ["Wetter-Tagebuch", "Thermometer", "Symbole"],
        duration: "15 Min täglich",
        description: "Regelmäßige Wetterbeobachtung schult systematisches Denken.",
        shortInstruction: "Dokumentiere täglich das Wetter mit Symbolen und besprich Veränderungen."
    },
    {
        id: 59,
        title: "Schattentheater",
        ageGroup: "kiga",
        areas: ["sprache", "natur"],
        materials: ["Lichtquelle", "weißes Tuch", "Figuren aus Pappe"],
        duration: "30-40 Min",
        description: "Eigene Schattenspiele erfinden und aufführen fördert Kreativität und Sprache.",
        shortInstruction: "Baue ein Schattentheater auf und lass Kinder eigene Geschichten inszenieren."
    },
    {
        id: 60,
        title: "Gesunde Brotzeit zubereiten",
        ageGroup: "kiga",
        areas: ["gesundheit"],
        materials: ["Vollkornbrot", "Gemüse", "Aufstriche", "kindersichere Messer"],
        duration: "30 Min",
        description: "Gemeinsame Zubereitung fördert Ernährungsbewusstsein und Selbständigkeit.",
        shortInstruction: "Bereite gemeinsam eine gesunde Jause zu und spreche über gesunde Ernährung."
    },
    {
        id: 61,
        title: "Kooperationsspiele",
        ageGroup: "kiga",
        areas: ["ethik", "bewegung"],
        materials: ["Tuch", "Ball", "verschiedene Materialien"],
        duration: "20-30 Min",
        description: "Gemeinsam Aufgaben lösen stärkt Teamfähigkeit.",
        shortInstruction: "Spiele wie 'Turm bauen ohne Hände' oder 'Ball auf Tuch transportieren'."
    },
    {
        id: 62,
        title: "Gefühls-Tagebuch",
        ageGroup: "kiga",
        areas: ["emotionen"],
        materials: ["Heft", "Stifte", "Gefühls-Symbole"],
        duration: "15 Min",
        description: "Regelmäßiges Reflektieren von Gefühlen fördert Selbstwahrnehmung.",
        shortInstruction: "Spreche täglich über Gefühle und lasse Kinder diese malen oder mit Symbolen ausdrücken."
    },
    {
        id: 63,
        title: "Formensuche in der Natur",
        ageGroup: "kiga",
        areas: ["natur"],
        materials: ["Sammelbeutel", "Outdoor-Bereich"],
        duration: "30 Min",
        description: "Geometrische Formen in der Natur entdecken verbindet Mathematik und Umwelt.",
        shortInstruction: "Suche draußen nach runden, dreieckigen oder eckigen Naturmaterialien."
    },
    {
        id: 64,
        title: "Geräusch-Geschichten",
        ageGroup: "kiga",
        areas: ["sprache"],
        materials: ["Instrumente", "Alltagsgegenstände", "Aufnahmegerät"],
        duration: "30 Min",
        description: "Geschichten akustisch gestalten fördert auditives Gedächtnis und Kreativität.",
        shortInstruction: "Erzähle eine Geschichte und lass Kinder passende Geräusche dazu erzeugen."
    },
    {
        id: 65,
        title: "Pflanzenwachstum beobachten",
        ageGroup: "kiga",
        areas: ["natur", "gesundheit"],
        materials: ["Samen", "Erde", "Töpfe", "Gießkanne"],
        duration: "10 Min täglich über Wochen",
        description: "Eigene Pflanzen ziehen lehrt Verantwortung und biologische Zusammenhänge.",
        shortInstruction: "Pflanze gemeinsam Kresse oder Bohnen und dokumentiere das Wachstum."
    },

    // ===== Schulvorbereitung (5-6 Jahre) =====
    {
        id: 66,
        title: "Buchstaben-Werkstatt",
        ageGroup: "school",
        areas: ["sprache"],
        materials: ["Buchstabenkarten", "Sand", "Knete", "Stifte"],
        duration: "30 Min",
        description: "Buchstaben mit mehreren Sinnen erfassen - sehen, schreiben, formen, fühlen.",
        shortInstruction: "Führe einen Buchstaben ein, schreibe ihn in Sand, forme ihn aus Knete und suche ihn in Wörtern."
    },
    {
        id: 67,
        title: "Zahlen und Mengen zuordnen",
        ageGroup: "school",
        areas: ["natur"],
        materials: ["Zahlenkarten 1-20", "Muggelsteine", "Würfel"],
        duration: "25-30 Min",
        description: "Zahlenverständnis bis 20 festigen durch konkretes Handeln.",
        shortInstruction: "Ordne Zahlenkarten passende Mengen zu, würfle und zähle, vergleiche Mengen."
    },
    {
        id: 68,
        title: "Schwungübungen für die Schrift",
        ageGroup: "school",
        areas: ["bewegung"],
        materials: ["große Papierbögen", "dicke Stifte", "Schwungübungsvorlagen"],
        duration: "20 Min",
        description: "Feinmotorische Vorbereitung auf das Schreiben durch Schwünge und Schleifen.",
        shortInstruction: "Male große Schwünge in die Luft, auf Papier, im Sand - von groß zu klein."
    },
    {
        id: 69,
        title: "Anlaute hören und erkennen",
        ageGroup: "school",
        areas: ["sprache"],
        materials: ["Bildkarten", "Gegenstände", "Buchstabenkarten"],
        duration: "20-25 Min",
        description: "Phonologische Bewusstheit - welcher Laut ist am Anfang eines Wortes?",
        shortInstruction: "Suche Gegenstände mit gleichem Anfangslaut, ordne Bilder zu Buchstaben, klatsche Silben."
    },
    {
        id: 70,
        title: "Konzentrationsspiele",
        ageGroup: "school",
        areas: ["ethik"],
        materials: ["Memory-Karten", "Puzzle", "Fehlerbilder"],
        duration: "20-30 Min",
        description: "Ausdauer und Konzentration für längere Arbeitsphasen trainieren.",
        shortInstruction: "Spiele Memory, suche Unterschiede in Bildern, löse knifflige Rätsel."
    },
    {
        id: 71,
        title: "Stifthaltung üben",
        ageGroup: "school",
        areas: ["bewegung"],
        materials: ["Dreikant-Stifte", "Nachspurbilder", "Labyrinthe"],
        duration: "15-20 Min",
        description: "Korrekte Stifthaltung und Stiftführung für ermüdungsfreies Schreiben.",
        shortInstruction: "Zeige Dreipunktgriff, male Labyrinthe nach, spure Formen und Muster nach."
    },
    {
        id: 72,
        title: "Uhr lesen lernen",
        ageGroup: "school",
        areas: ["natur"],
        materials: ["Lernuhr", "Tagesablauf-Bilder", "Zeiger zum Einstellen"],
        duration: "20-25 Min",
        description: "Zeitverständnis entwickeln - volle und halbe Stunden erkennen.",
        shortInstruction: "Stelle Uhrzeiten ein, ordne Tagesaktivitäten zu Uhrzeiten, spiele 'Wie spät ist es?'"
    },
    {
        id: 73,
        title: "Formen und Muster erkennen",
        ageGroup: "school",
        areas: ["natur"],
        materials: ["geometrische Formen", "Musterkarten", "Legematerial"],
        duration: "25 Min",
        description: "Geometrisches Verständnis und Mustererkennung für Mathematik.",
        shortInstruction: "Lege Muster fort, erkenne Formen in der Umgebung, baue Figuren nach Vorlage."
    },
    {
        id: 74,
        title: "Schulweg üben",
        ageGroup: "school",
        areas: ["gesundheit", "ethik"],
        materials: ["eventuell Verkehrsschilder-Karten", "Outdoor"],
        duration: "30-40 Min",
        description: "Verkehrserziehung und Orientierung im Straßenverkehr.",
        shortInstruction: "Gehe den Schulweg ab, übe Straßenüberquerung, bespreche Verkehrsregeln und Gefahren."
    },
    {
        id: 75,
        title: "Geschichten nacherzählen",
        ageGroup: "school",
        areas: ["sprache", "emotionen"],
        materials: ["Bilderbuch", "Bildkarten zur Geschichte", "evtl. Aufnahmegerät"],
        duration: "25-30 Min",
        description: "Sprachliche Ausdrucksfähigkeit und Gedächtnis schulen.",
        shortInstruction: "Lies eine Geschichte vor, lass sie nacherzählen mit Hilfe von Bildkarten, stelle W-Fragen."
    },
    {
        id: 76,
        title: "Schulranzen packen",
        ageGroup: "school",
        areas: ["ethik"],
        materials: ["Schulranzen", "Schulmaterialien (Hefte, Stifte, Jausenbox)"],
        duration: "15-20 Min",
        description: "Selbstorganisation und Verantwortung für eigene Sachen üben.",
        shortInstruction: "Übe systematisches Packen, benenne Schulsachen, sortiere nach Wichtigkeit."
    },
    {
        id: 77,
        title: "Zuhören und Anweisungen folgen",
        ageGroup: "school",
        areas: ["sprache", "ethik"],
        materials: ["keine oder einfache Materialien"],
        duration: "20 Min",
        description: "Mehrstufige Arbeitsanweisungen verstehen und umsetzen.",
        shortInstruction: "Gib zunehmend komplexe Aufträge (erst 1-Schritt, dann 2-3 Schritte) und lasse sie ausführen."
    },
    {
        id: 78,
        title: "Linien und Formen schneiden",
        ageGroup: "school",
        areas: ["bewegung"],
        materials: ["Schere", "Vorlagen mit Linien", "dickes Papier"],
        duration: "20 Min",
        description: "Präzises Schneiden als Vorbereitung für Bastelarbeiten in der Schule.",
        shortInstruction: "Schneide gerade Linien, Kurven, Zickzack, dann einfache Formen aus."
    },
    {
        id: 79,
        title: "Soziales Miteinander in der Gruppe",
        ageGroup: "school",
        areas: ["ethik", "emotionen"],
        materials: ["Kooperationsspiele", "Gesprächsrunden"],
        duration: "30 Min",
        description: "Sich melden, warten, andere ausreden lassen - wichtige Schulkompetenzen.",
        shortInstruction: "Übe Gesprächsregeln im Morgenkreis, spiele Spiele wo man sich abwechseln muss."
    },
    {
        id: 80,
        title: "Arbeitsblätter bearbeiten",
        ageGroup: "school",
        areas: ["natur"],
        materials: ["einfache Vorschulblätter", "Stifte", "Radiergummi"],
        duration: "15-20 Min",
        description: "An strukturiertes Arbeiten auf Papier gewöhnen.",
        shortInstruction: "Biete altersgerechte Arbeitsblätter an, zeige wie man Fehler korrigiert, lobe Ausdauer."
    },
    {
        id: 81,
        title: "Reimen und Silben klatschen",
        ageGroup: "school",
        areas: ["sprache"],
        materials: ["Bildkarten", "Reimwörter-Memory"],
        duration: "20 Min",
        description: "Phonologische Bewusstheit als Grundlage für Lesen und Schreiben.",
        shortInstruction: "Finde Reimpaare, klatsche Silben von Namen und Wörtern, erfinde Unsinn-Reime."
    },
    {
        id: 82,
        title: "Plus und Minus im Zahlenraum 10",
        ageGroup: "school",
        areas: ["natur"],
        materials: ["Rechenplättchen", "Würfel", "Zahlenkarten"],
        duration: "25 Min",
        description: "Erste Rechenoperationen mit konkretem Material verstehen.",
        shortInstruction: "Lege Rechengeschichten mit Plättchen, würfle und addiere, nimm weg und zähle was bleibt."
    },
    {
        id: 83,
        title: "Ordnung halten am Arbeitsplatz",
        ageGroup: "school",
        areas: ["ethik"],
        materials: ["Schulsachen", "Ordnungssysteme"],
        duration: "15 Min",
        description: "Arbeitsplatz strukturiert gestalten und pflegen.",
        shortInstruction: "Richte einen 'Schul-Arbeitsplatz' ein, übe Aufräumen nach Aktivitäten, sortiere Materialien."
    },
    {
        id: 84,
        title: "Eigenen Namen schreiben",
        ageGroup: "school",
        areas: ["sprache"],
        materials: ["Namenskarte als Vorlage", "Stifte", "Papier"],
        duration: "15-20 Min",
        description: "Der eigene Name als erstes bedeutungsvolles Wort.",
        shortInstruction: "Spure den Namen nach, schreibe ihn mit Vorlage, dann aus dem Gedächtnis, male ihn kreativ."
    },
    {
        id: 85,
        title: "Konflikte verbal lösen",
        ageGroup: "school",
        areas: ["emotionen", "ethik"],
        materials: ["Gefühlskarten", "Konfliktlösungs-Plakat"],
        duration: "20-25 Min",
        description: "Konflikte mit Worten statt Handlungen lösen lernen.",
        shortInstruction: "Bespreche Konflikte, übe Ich-Botschaften, rolle Lösungsstrategien durch, erstelle Friedensregeln."
    }
];

// Bildungsbereich-Definitionen
const educationAreas = {
    emotionen: { name: "Emotionen und soziale Beziehungen", color: "#E63946" },
    ethik: { name: "Ethik und Gesellschaft", color: "#9B59B6" },
    sprache: { name: "Sprache und Kommunikation", color: "#3498DB" },
    bewegung: { name: "Bewegung und Gesundheit", color: "#27AE60" },
    gesundheit: { name: "Gesundheit und Wohlbefinden", color: "#F39C12" },
    natur: { name: "Ästhetik und Gestaltung", color: "#16A085" }
};

// Altersgruppen-Definitionen
const ageGroups = {
    "babies": { label: "Babys (0-1)", icon: "🍼" },
    "krippe": { label: "Krippe (1-3)", icon: "🧸" },
    "kiga": { label: "Kindergarten (3-5)", icon: "🎨" },
    "school": { label: "Schulvorbereitung", icon: "🎒" }
};
