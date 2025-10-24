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
        themes: ["wald", "herbst"],
        goals: ["sinne", "kognitiv", "natur"],
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
        goals: ["emotional", "sozial", "kognitiv"],
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
        goals: ["emotional", "selbststaendig", "sinne"],
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
        goals: ["musik", "grobmotorik", "sprache"],
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
        goals: ["sinne", "feinmotorik", "kognitiv"],
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
        goals: ["sinne", "emotional", "selbststaendig"],
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
        goals: ["feinmotorik", "sinne", "kognitiv"],
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
        goals: ["sinne", "emotional", "musik"],
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
        goals: ["grobmotorik", "bewegung", "emotional"],
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
        goals: ["sinne", "sprache", "literacy"],
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
        goals: ["sinne", "kognitiv", "musik"],
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
        goals: ["feinmotorik", "sprache", "sozial"],
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
        goals: ["sinne", "kognitiv", "konzentration"],
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
        goals: ["grobmotorik", "emotional", "sinne"],
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
        goals: ["sinne", "kognitiv", "emotional"],
        materials: ["Seifenblasen", "Federn"],
        duration: "5-10 Min",
        description: "Das Beobachten von schwebenden Objekten fasziniert und fördert die Augenfolgebewegung.",
        shortInstruction: "Puste sanft Seifenblasen oder lass Federn durch die Luft schweben - das Baby beobachtet und greift vielleicht danach."
    },
    {
        id: 86,
        title: "Massage und Körperkontakt",
        ageGroup: "babies",
        areas: ["gesundheit", "emotionen"],
        goals: ["sinne", "emotional", "sozial"],
        materials: ["Babyöl", "weiche Unterlage"],
        duration: "10-15 Min",
        description: "Sanfte Babymassage stärkt die Bindung und fördert Körperbewusstsein.",
        shortInstruction: "Massiere sanft Arme, Beine und Rücken mit warmem Öl - spreche oder singe dabei."
    },
    {
        id: 87,
        title: "Unterschiedliche Texturen erfühlen",
        ageGroup: "babies",
        areas: ["natur"],
        goals: ["sinne", "kognitiv", "konzentration"],
        materials: ["Samt", "Cord", "Seide", "Wolle", "Schmirgelpapier"],
        duration: "10 Min",
        description: "Verschiedene Oberflächen stimulieren den Tastsinn.",
        shortInstruction: "Lass das Baby verschiedene Stoffe und Materialien mit Händen und Füßen erkunden."
    },
    {
        id: 88,
        title: "Gemeinsames Singen",
        ageGroup: "babies",
        areas: ["sprache", "emotionen"],
        goals: ["musik", "sprache", "emotional"],
        materials: ["eigene Stimme"],
        duration: "5-10 Min",
        description: "Wiegenlieder und einfache Melodien beruhigen und fördern Sprachentwicklung.",
        shortInstruction: "Singe vertraute Lieder, variiere Lautstärke und Tempo, beobachte die Reaktionen."
    },
    {
        id: 89,
        title: "Bauchtanz-Zeit",
        ageGroup: "babies",
        areas: ["bewegung"],
        goals: ["grobmotorik", "bewegung", "selbststaendig"],
        materials: ["weiche Matte", "interessante Spielsachen"],
        duration: "5-10 Min",
        description: "Bauchlage stärkt Nacken- und Rückenmuskulatur.",
        shortInstruction: "Lege das Baby auf den Bauch, platziere Spielzeug in Sichtweite als Anreiz zum Heben des Kopfes."
    },
    {
        id: 90,
        title: "Stapelbecher erkunden",
        ageGroup: "babies",
        areas: ["natur"],
        goals: ["feinmotorik", "kognitiv", "konzentration"],
        materials: ["Stapelbecher", "weiche Unterlage"],
        duration: "10 Min",
        description: "Becher ineinander stecken, stapeln und umwerfen fördert Hand-Auge-Koordination.",
        shortInstruction: "Zeige wie Becher ineinander passen, lass das Baby experimentieren und entdecken."
    },
    {
        id: 91,
        title: "Versteckspiele mit Spielzeug",
        ageGroup: "babies",
        areas: ["natur", "emotionen"],
        goals: ["kognitiv", "emotional", "sozial"],
        materials: ["Lieblingsspielzeug", "Tuch"],
        duration: "5-10 Min",
        description: "Gegenstände verstecken und wiederfinden fördert Objektpermanenz.",
        shortInstruction: "Verstecke ein Spielzeug unter einem Tuch und lass das Baby es suchen und finden."
    },
    {
        id: 92,
        title: "Mobile beobachten",
        ageGroup: "babies",
        areas: ["natur"],
        goals: ["sinne", "konzentration", "emotional"],
        materials: ["Mobile oder hängende Objekte"],
        duration: "5-10 Min",
        description: "Bewegliche Objekte verfolgen schult visuelle Wahrnehmung.",
        shortInstruction: "Hänge ein Mobile auf oder bewege sanft bunte Objekte - das Baby folgt mit den Augen."
    },
    {
        id: 93,
        title: "Erste Bilderbücher",
        ageGroup: "babies",
        areas: ["sprache"],
        goals: ["literacy", "sprache", "sinne"],
        materials: ["Stoffbücher", "Badebücher"],
        duration: "5 Min",
        description: "Kontrastreiche Bilder und einfache Formen faszinieren.",
        shortInstruction: "Zeige Seite für Seite, benenne was zu sehen ist, lass das Baby die Seiten berühren."
    },
    {
        id: 94,
        title: "Körperteile benennen",
        ageGroup: "babies",
        areas: ["sprache", "gesundheit"],
        goals: ["sprache", "selbststaendig", "kognitiv"],
        materials: ["keine"],
        duration: "5 Min",
        description: "Spielerisch Körperteile kennenlernen fördert Körperbewusstsein und Sprache.",
        shortInstruction: "Berühre sanft Nase, Bauch, Füße und benenne sie - 'Das ist deine Nase!'"
    },
    {
        id: 95,
        title: "Krabbel-Parcours",
        ageGroup: "babies",
        areas: ["bewegung"],
        goals: ["grobmotorik", "bewegung", "selbststaendig"],
        materials: ["Kissen", "Decken", "weiche Hindernisse"],
        duration: "10-15 Min",
        description: "Anreize zum Krabbeln fördern motorische Entwicklung.",
        shortInstruction: "Baue einen weichen Parcours mit kleinen Hindernissen, ermutige zum Krabbeln."
    },

    // ===== Krippe (1-3 Jahre) =====
    {
        id: 16,
        title: "Schüttübungen mit Alltagsmaterial",
        ageGroup: "krippe",
        areas: ["bewegung"],
        goals: ["feinmotorik", "konzentration", "selbststaendig"],
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
        themes: ["tiere", "bauernhof"],
        goals: ["sprache", "kognitiv", "sozial"],
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
        goals: ["grobmotorik", "bewegung", "selbststaendig"],
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
        goals: ["kreativitaet", "sinne", "feinmotorik"],
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
        goals: ["feinmotorik", "kognitiv", "konzentration"],
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
        goals: ["feinmotorik", "konzentration", "sinne"],
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
        goals: ["grobmotorik", "musik", "emotional"],
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
        goals: ["kognitiv", "konzentration", "mathematik"],
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
        goals: ["literacy", "sprache", "emotional"],
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
        goals: ["feinmotorik", "kreativitaet", "sinne"],
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
        goals: ["grobmotorik", "sozial", "bewegung"],
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
        goals: ["natur", "bewegung", "kognitiv"],
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
        goals: ["feinmotorik", "kognitiv", "konzentration"],
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
        goals: ["selbststaendig", "sozial", "bewegung"],
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
        goals: ["sinne", "kognitiv", "konzentration"],
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
        goals: ["sozial", "sprache", "kreativitaet"],
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
        goals: ["kognitiv", "konzentration", "kreativitaet"],
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
        goals: ["kognitiv", "kreativitaet", "feinmotorik"],
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
        goals: ["emotional", "sprache", "sozial"],
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
        goals: ["sinne", "kreativitaet", "feinmotorik"],
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
        goals: ["musik", "sozial", "kreativitaet"],
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
        goals: ["grobmotorik", "konzentration", "selbststaendig"],
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
        goals: ["kognitiv", "konzentration", "feinmotorik"],
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
        goals: ["sprache", "kreativitaet", "emotional"],
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
        goals: ["feinmotorik", "konzentration", "selbststaendig"],
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
        goals: ["sprache", "literacy", "kognitiv"],
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
        goals: ["grobmotorik", "kreativitaet", "natur"],
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
        goals: ["feinmotorik", "selbststaendig", "sozial"],
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
        goals: ["kognitiv", "sinne", "natur"],
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
        goals: ["emotional", "sprache", "literacy"],
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
        goals: ["kognitiv", "natur", "konzentration"],
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
        goals: ["mathematik", "grobmotorik", "kognitiv"],
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
        goals: ["sprache", "kreativitaet", "literacy"],
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
        goals: ["sozial", "kognitiv", "emotional"],
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
        goals: ["grobmotorik", "konzentration", "emotional"],
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
        goals: ["natur", "literacy", "kognitiv"],
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
        goals: ["sozial", "emotional", "sprache"],
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
        goals: ["literacy", "kognitiv", "bewegung"],
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
        goals: ["kreativitaet", "feinmotorik", "selbststaendig"],
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
        goals: ["grobmotorik", "sprache", "kreativitaet"],
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
        goals: ["sozial", "kognitiv", "emotional"],
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
        goals: ["mathematik", "kognitiv", "feinmotorik"],
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
        goals: ["natur", "kognitiv", "literacy"],
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
        goals: ["kreativitaet", "sprache", "sozial"],
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
        goals: ["selbststaendig", "feinmotorik", "sozial"],
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
        goals: ["sozial", "grobmotorik", "kognitiv"],
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
        goals: ["emotional", "selbststaendig", "kreativitaet"],
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
        goals: ["mathematik", "natur", "kognitiv"],
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
        goals: ["kreativitaet", "sinne", "sprache"],
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
        goals: ["natur", "selbststaendig", "kognitiv"],
        materials: ["Samen", "Erde", "Töpfe", "Gießkanne"],
        duration: "10 Min täglich über Wochen",
        description: "Eigene Pflanzen ziehen lehrt Verantwortung und biologische Zusammenhänge.",
        shortInstruction: "Pflanze gemeinsam Kresse oder Bohnen und dokumentiere das Wachstum."
    },
    {
        id: 96,
        title: "Farben mischen",
        ageGroup: "kiga",
        areas: ["natur"],
        goals: ["kreativitaet", "kognitiv", "feinmotorik"],
        materials: ["Wasserfarben", "Becher", "Wasser", "Pipetten"],
        duration: "25-30 Min",
        description: "Experimentieren mit Primärfarben fördert wissenschaftliches Denken.",
        shortInstruction: "Lass Kinder Rot + Gelb, Blau + Gelb, Rot + Blau mischen und neue Farben entdecken."
    },
    {
        id: 97,
        title: "Schatzsuche mit Hinweisen",
        ageGroup: "kiga",
        areas: ["sprache", "bewegung"],
        goals: ["literacy", "kognitiv", "grobmotorik"],
        materials: ["Hinweiszettel", "kleiner Schatz", "Outdoor-Bereich"],
        duration: "30-40 Min",
        description: "Hinweise lesen und interpretieren fördert Lesemotivation und logisches Denken.",
        shortInstruction: "Verstecke Hinweise im Garten, die Schritt für Schritt zum Schatz führen."
    },
    {
        id: 98,
        title: "Verkehrserziehung spielerisch",
        ageGroup: "kiga",
        areas: ["gesundheit", "ethik"],
        goals: ["kognitiv", "sozial", "selbststaendig"],
        materials: ["Fahrzeuge", "Verkehrsschilder", "Hof oder Turnraum"],
        duration: "25-30 Min",
        description: "Verkehrsregeln im Spiel verstehen und anwenden.",
        shortInstruction: "Baue eine Straße mit Ampel und Zebrastreifen, spiele Situationen durch."
    },
    {
        id: 99,
        title: "Instrumente basteln",
        ageGroup: "kiga",
        areas: ["natur", "sprache"],
        goals: ["kreativitaet", "musik", "feinmotorik"],
        materials: ["Recyclingmaterial", "Reis", "Gummis", "Klebeband"],
        duration: "40 Min",
        description: "Eigene Instrumente herstellen verbindet Kreativität und Musik.",
        shortInstruction: "Bastle Rasseln aus Dosen, Trommeln aus Töpfen, Gitarren aus Schachteln."
    },
    {
        id: 100,
        title: "Erste Erfahrungen mit Geld",
        ageGroup: "kiga",
        areas: ["natur", "ethik"],
        goals: ["mathematik", "sozial", "kognitiv"],
        materials: ["Spielgeld", "Preisschilder", "Kaufladenzubehör"],
        duration: "25 Min",
        description: "Spielerischer Umgang mit Geld fördert mathematisches Verständnis.",
        shortInstruction: "Spiele Einkaufen mit Münzen und Scheinen, zähle zusammen, gib Wechselgeld."
    },
    {
        id: 101,
        title: "Sinnes-Parcours",
        ageGroup: "kiga",
        areas: ["natur", "bewegung"],
        goals: ["sinne", "grobmotorik", "konzentration"],
        materials: ["verschiedene Materialien", "Barfußpfad-Elemente"],
        duration: "20-30 Min",
        description: "Alle Sinne werden auf einem Parcours angesprochen.",
        shortInstruction: "Baue Stationen zum Fühlen, Riechen, Hören, Schmecken - Kinder durchlaufen barfuß."
    },
    {
        id: 102,
        title: "Detektiv-Spiele",
        ageGroup: "kiga",
        areas: ["natur", "sprache"],
        goals: ["kognitiv", "konzentration", "sozial"],
        materials: ["Lupe", "Spuren", "Rätsel"],
        duration: "30 Min",
        description: "Rätsel lösen und Spuren suchen fördert Beobachtungsgabe.",
        shortInstruction: "Verstecke Hinweise und Spuren, lass Kinder Detektiv spielen und Rätsel lösen."
    },
    {
        id: 103,
        title: "Gefühls-Charade",
        ageGroup: "kiga",
        areas: ["emotionen"],
        goals: ["emotional", "sozial", "kreativitaet"],
        materials: ["Gefühls-Karten"],
        duration: "20 Min",
        description: "Emotionen darstellen und erraten fördert emotionale Intelligenz.",
        shortInstruction: "Ziehe eine Gefühls-Karte, stelle das Gefühl pantomimisch dar, andere raten."
    },
    {
        id: 104,
        title: "Magnet-Experimente",
        ageGroup: "kiga",
        areas: ["natur"],
        goals: ["kognitiv", "natur", "konzentration"],
        materials: ["Magnete", "verschiedene Gegenstände", "Tabelle"],
        duration: "25 Min",
        description: "Entdecken welche Materialien magnetisch sind fördert wissenschaftliches Forschen.",
        shortInstruction: "Teste mit Magneten verschiedene Gegenstände, dokumentiere was haftet und was nicht."
    },
    {
        id: 105,
        title: "Freundschafts-Armbänder knüpfen",
        ageGroup: "kiga",
        areas: ["bewegung", "emotionen"],
        goals: ["feinmotorik", "sozial", "kreativitaet"],
        materials: ["Wolle", "Perlen", "Schere"],
        duration: "30 Min",
        description: "Feinmotorik und soziale Bindungen werden gestärkt.",
        shortInstruction: "Zeige einfache Knüpftechnik, lass Kinder Armbänder für Freunde gestalten."
    },

    // ===== Schulvorbereitung (5-6 Jahre) =====
    {
        id: 66,
        title: "Buchstaben-Werkstatt",
        ageGroup: "school",
        areas: ["sprache"],
        goals: ["literacy", "feinmotorik", "sinne"],
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
        goals: ["mathematik", "kognitiv", "konzentration"],
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
        goals: ["feinmotorik", "literacy", "konzentration"],
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
        goals: ["literacy", "sprache", "kognitiv"],
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
        goals: ["konzentration", "kognitiv", "selbststaendig"],
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
        goals: ["feinmotorik", "konzentration", "selbststaendig"],
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
        goals: ["mathematik", "kognitiv", "konzentration"],
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
        goals: ["mathematik", "kognitiv", "kreativitaet"],
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
        goals: ["selbststaendig", "kognitiv", "sozial"],
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
        goals: ["sprache", "literacy", "kognitiv"],
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
        goals: ["selbststaendig", "kognitiv", "konzentration"],
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
        goals: ["sprache", "konzentration", "kognitiv"],
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
        goals: ["feinmotorik", "konzentration", "selbststaendig"],
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
        goals: ["sozial", "emotional", "selbststaendig"],
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
        goals: ["konzentration", "feinmotorik", "selbststaendig"],
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
        goals: ["literacy", "sprache", "kognitiv"],
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
        goals: ["mathematik", "kognitiv", "konzentration"],
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
        goals: ["selbststaendig", "konzentration", "kognitiv"],
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
        goals: ["literacy", "feinmotorik", "selbststaendig"],
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
        goals: ["emotional", "sozial", "sprache"],
        materials: ["Gefühlskarten", "Konfliktlösungs-Plakat"],
        duration: "20-25 Min",
        description: "Konflikte mit Worten statt Handlungen lösen lernen.",
        shortInstruction: "Bespreche Konflikte, übe Ich-Botschaften, rolle Lösungsstrategien durch, erstelle Friedensregeln."
    },
    {
        id: 106,
        title: "Würfelspiele mit Zahlen",
        ageGroup: "school",
        areas: ["natur"],
        goals: ["mathematik", "sozial", "kognitiv"],
        materials: ["Würfel", "Spielplan", "Spielfiguren"],
        duration: "20-25 Min",
        description: "Spielerisch Zahlen erkennen und zählen.",
        shortInstruction: "Spiele einfache Würfelspiele, bei denen gezählt und vorwärts gezogen wird."
    },
    {
        id: 107,
        title: "Gedächtnistraining",
        ageGroup: "school",
        areas: ["natur"],
        goals: ["konzentration", "kognitiv", "sinne"],
        materials: ["Tablett", "10-15 Gegenstände", "Tuch"],
        duration: "15-20 Min",
        description: "Konzentration und Merkfähigkeit für die Schule trainieren.",
        shortInstruction: "Zeige Gegenstände, decke ab, entferne einen - welcher fehlt?"
    },
    {
        id: 108,
        title: "Symmetrie entdecken",
        ageGroup: "school",
        areas: ["natur"],
        goals: ["mathematik", "kognitiv", "kreativitaet"],
        materials: ["Spiegel", "Papier", "Farben", "Naturmaterialien"],
        duration: "25 Min",
        description: "Mathematisches Konzept der Symmetrie verstehen.",
        shortInstruction: "Falte Papier, male eine Hälfte, klappe auf - entdecke Spiegelbild in der Natur."
    },
    {
        id: 109,
        title: "Erste englische Wörter",
        ageGroup: "school",
        areas: ["sprache"],
        goals: ["sprache", "kognitiv", "musik"],
        materials: ["Bildkarten", "Lieder auf Englisch"],
        duration: "15-20 Min",
        description: "Spielerischer Erstkontakt mit Fremdsprache.",
        shortInstruction: "Lerne einfache Wörter (Farben, Zahlen, Tiere) mit Liedern und Spielen."
    },
    {
        id: 110,
        title: "Linkshänder-Unterstützung",
        ageGroup: "school",
        areas: ["bewegung"],
        goals: ["feinmotorik", "selbststaendig", "konzentration"],
        materials: ["Linkshänder-Schere", "spezielles Schreibmaterial"],
        duration: "individuell",
        description: "Linkshändige Kinder gezielt fördern.",
        shortInstruction: "Biete angepasstes Material, achte auf Sitzhaltung und Blattlage beim Schreiben."
    },
    {
        id: 111,
        title: "Kalender und Wochentage",
        ageGroup: "school",
        areas: ["natur", "sprache"],
        goals: ["kognitiv", "mathematik", "sprache"],
        materials: ["Kalender", "Tageskarten", "Jahreszeitenbilder"],
        duration: "15 Min täglich",
        description: "Zeitliches Verständnis für Tage, Wochen, Monate entwickeln.",
        shortInstruction: "Markiere jeden Tag im Kalender, benenne Wochentag, zähle bis zum Wochenende."
    },
    {
        id: 112,
        title: "Tisch decken und Manieren",
        ageGroup: "school",
        areas: ["ethik", "gesundheit"],
        goals: ["selbststaendig", "sozial", "feinmotorik"],
        materials: ["Geschirr", "Besteck", "Servietten"],
        duration: "20 Min",
        description: "Tischkultur und Selbständigkeit beim Essen.",
        shortInstruction: "Übe Tisch decken, richtiges Sitzen, Besteck halten, Wartezeiten einhalten."
    },
    {
        id: 113,
        title: "Logikrätsel",
        ageGroup: "school",
        areas: ["natur"],
        goals: ["kognitiv", "konzentration", "mathematik"],
        materials: ["Rätselkarten", "Sudoku für Kinder", "Logik-Spiele"],
        duration: "20 Min",
        description: "Logisches Denken für Mathematik vorbereiten.",
        shortInstruction: "Löse altersgerechte Sudokus, Muster-Rätsel und Logikaufgaben."
    },
    {
        id: 114,
        title: "Gefühle regulieren lernen",
        ageGroup: "school",
        areas: ["emotionen", "gesundheit"],
        goals: ["emotional", "selbststaendig", "konzentration"],
        materials: ["Gefühlsthermometer", "Entspannungsübungen"],
        duration: "15-20 Min",
        description: "Emotionsregulation als wichtige Schulkompetenz.",
        shortInstruction: "Benenne Gefühle, zeige auf Thermometer, übe Atemtechniken zum Beruhigen."
    },
    {
        id: 115,
        title: "Telefonieren üben",
        ageGroup: "school",
        areas: ["sprache", "ethik"],
        themes: ["familie"],
        goals: ["sprache", "selbststaendig", "sozial"],
        materials: ["Spieltelefone oder ausrangierte Telefone"],
        duration: "15 Min",
        description: "Kommunikation am Telefon für Notfälle vorbereiten.",
        shortInstruction: "Übe Namen nennen, Adresse sagen, höfliche Begrüßung und Verabschiedung."
    },

    // ===== Themen-spezifische Aktivitäten =====

    // Frühling
    {
        id: 116,
        title: "Blumen pflanzen",
        ageGroup: "krippe",
        areas: ["natur", "gesundheit"],
        themes: ["fruehling"],
        goals: ["natur", "feinmotorik", "selbststaendig"],
        materials: ["Blumentöpfe", "Erde", "Blumensamen", "Gießkanne"],
        duration: "20-25 Min",
        description: "Im Frühling Blumen säen und Wachstum beobachten.",
        shortInstruction: "Pflanze gemeinsam Frühlingsblumen, gieße und beobachte täglich das Wachstum."
    },
    {
        id: 117,
        title: "Osterkörbchen basteln",
        ageGroup: "kiga",
        areas: ["natur"],
        themes: ["ostern", "fruehling"],
        goals: ["kreativitaet", "feinmotorik", "konzentration"],
        materials: ["Bastelpapier", "Kleber", "Schere", "Deko"],
        duration: "30-40 Min",
        description: "Kreatives Gestalten für das Osterfest.",
        shortInstruction: "Bastle bunte Osterkörbchen und dekoriere sie mit Frühlingsmotiven."
    },

    // Sommer
    {
        id: 118,
        title: "Wasserspiele im Garten",
        ageGroup: "krippe",
        areas: ["bewegung", "natur"],
        themes: ["sommer", "wasser"],
        goals: ["sinne", "grobmotorik", "sozial"],
        materials: ["Planschbecken", "Wasserspielzeug", "Becher"],
        duration: "30-40 Min",
        description: "Erfrischende Wasserspiele an heißen Tagen.",
        shortInstruction: "Richte eine Wasserstation ein - schöpfen, gießen, spritzen an heißen Sommertagen."
    },
    {
        id: 119,
        title: "Barfußpfad im Garten",
        ageGroup: "kiga",
        areas: ["bewegung", "natur"],
        themes: ["sommer"],
        goals: ["sinne", "grobmotorik", "natur"],
        materials: ["Sand", "Gras", "Steine", "Rindenmulch"],
        duration: "20 Min",
        description: "Sinnlicher Barfußpfad mit verschiedenen Materialien.",
        shortInstruction: "Lege einen Pfad mit verschiedenen Materialien an - Kinder laufen barfuß."
    },

    // Herbst
    {
        id: 120,
        title: "Blätter sammeln und pressen",
        ageGroup: "kiga",
        areas: ["natur"],
        themes: ["herbst", "wald"],
        goals: ["natur", "feinmotorik", "kognitiv"],
        materials: ["Sammelbeutel", "Bücher zum Pressen", "Papier"],
        duration: "30 Min + Trockenzeit",
        description: "Herbstblätter sammeln, bestimmen und pressen.",
        shortInstruction: "Sammle bunte Herbstblätter, presse sie in Büchern, gestalte später Bilder damit."
    },
    {
        id: 121,
        title: "Erntedank-Fest feiern",
        ageGroup: "kiga",
        areas: ["ethik", "gesundheit"],
        themes: ["erntedank", "herbst"],
        goals: ["sozial", "emotional", "natur"],
        materials: ["Obst", "Gemüse", "Körbchen", "Deko"],
        duration: "40-60 Min",
        description: "Dankbarkeit für die Ernte feiern.",
        shortInstruction: "Dekoriere mit Herbstfrüchten, singe Lieder, teile Obst und Gemüse."
    },
    {
        id: 122,
        title: "Kastanien-Tiere basteln",
        ageGroup: "krippe",
        areas: ["natur"],
        themes: ["herbst", "tiere"],
        goals: ["kreativitaet", "feinmotorik", "natur"],
        materials: ["Kastanien", "Zahnstocher", "Wackelaugen", "Kleber"],
        duration: "20-30 Min",
        description: "Kreatives Gestalten mit Naturmaterialien.",
        shortInstruction: "Bastle Tiere aus Kastanien - verbinde mit Zahnstochern, klebe Augen auf."
    },

    // Winter
    {
        id: 123,
        title: "Schneemann bauen",
        ageGroup: "krippe",
        areas: ["bewegung", "natur"],
        themes: ["winter"],
        goals: ["grobmotorik", "kreativitaet", "sozial"],
        materials: ["Schnee", "Möhre", "Kohle", "Schal", "Hut"],
        duration: "30 Min",
        description: "Klassische Winteraktivität im Freien.",
        shortInstruction: "Forme Schneekugeln, baue einen Schneemann, dekoriere mit Naturmaterialien."
    },
    {
        id: 124,
        title: "Adventskranz gestalten",
        ageGroup: "kiga",
        areas: ["natur", "ethik"],
        themes: ["weihnachten", "winter"],
        goals: ["kreativitaet", "feinmotorik", "sozial"],
        materials: ["Tannenzweige", "Kerzen", "Deko", "Draht"],
        duration: "40 Min",
        description: "Gemeinsam einen Adventskranz binden.",
        shortInstruction: "Binde Tannenzweige zu einem Kranz, stecke Kerzen hinein, dekoriere."
    },
    {
        id: 125,
        title: "Plätzchen backen",
        ageGroup: "kiga",
        areas: ["gesundheit", "natur"],
        themes: ["weihnachten", "winter"],
        goals: ["feinmotorik", "sozial", "selbststaendig"],
        materials: ["Teig", "Ausstechformen", "Ofen", "Deko"],
        duration: "60 Min",
        description: "Weihnachtsbäckerei mit Kindern.",
        shortInstruction: "Rolle Teig aus, steche Formen aus, backe und verziere gemeinsam Plätzchen."
    },

    // Fasching
    {
        id: 126,
        title: "Masken basteln",
        ageGroup: "kiga",
        areas: ["natur", "emotionen"],
        themes: ["fasching"],
        goals: ["kreativitaet", "feinmotorik", "emotional"],
        materials: ["Pappteller", "Farben", "Federn", "Glitzer", "Gummiband"],
        duration: "30-40 Min",
        description: "Kreative Faschingsmasken gestalten.",
        shortInstruction: "Gestalte fantasievolle Masken aus Papptellern - male, klebe, dekoriere."
    },
    {
        id: 127,
        title: "Faschings-Bewegungsspiele",
        ageGroup: "krippe",
        areas: ["bewegung", "emotionen"],
        themes: ["fasching"],
        goals: ["grobmotorik", "sozial", "emotional"],
        materials: ["Musik", "Kostüme", "Tücher"],
        duration: "20-30 Min",
        description: "Lustige Bewegungsspiele zur Faschingszeit.",
        shortInstruction: "Tanze zu Faschingsmusik, spiele Stopptanz, bewege dich wie verschiedene Tiere."
    },

    // Bauernhof & Tiere
    {
        id: 128,
        title: "Bauernhof-Rollenspiel",
        ageGroup: "kiga",
        areas: ["sprache", "ethik"],
        themes: ["bauernhof", "tiere"],
        goals: ["sprache", "sozial", "kreativitaet"],
        materials: ["Spielzeug-Tiere", "Stall", "Traktor", "Stroh"],
        duration: "30-40 Min",
        description: "Bauernhof nachspielen und Tiernamen lernen.",
        shortInstruction: "Richte eine Bauernhof-Ecke ein, spiele Tierlaute nach, füttere Tiere."
    },
    {
        id: 129,
        title: "Besuch am Bauernhof",
        ageGroup: "kiga",
        areas: ["natur", "tiere"],
        themes: ["bauernhof", "tiere"],
        goals: ["natur", "sinne", "sozial"],
        materials: ["Ausflug zu einem Bauernhof"],
        duration: "2-3 Stunden",
        description: "Echter Bauernhof-Besuch mit allen Sinnen.",
        shortInstruction: "Besuche einen Bauernhof, beobachte Tiere, darf streicheln und füttern."
    },

    // Fahrzeuge
    {
        id: 130,
        title: "Fahrzeug-Parcours",
        ageGroup: "krippe",
        areas: ["bewegung"],
        themes: ["fahrzeuge"],
        goals: ["grobmotorik", "konzentration", "selbststaendig"],
        materials: ["Bobby-Cars", "Laufräder", "Hütchen", "Straßenmarkierungen"],
        duration: "25-30 Min",
        description: "Motorik mit Fahrzeugen trainieren.",
        shortInstruction: "Baue einen Parcours mit Kurven und Hindernissen - Kinder fahren mit Fahrzeugen."
    },
    {
        id: 131,
        title: "Baustelle spielen",
        ageGroup: "kiga",
        areas: ["natur", "bewegung"],
        themes: ["fahrzeuge"],
        goals: ["kreativitaet", "grobmotorik", "sozial"],
        materials: ["Baufahrzeuge", "Sand", "Steine", "Holzklötze"],
        duration: "40 Min",
        description: "Baustelle nachspielen fördert Kreativität.",
        shortInstruction: "Richte eine Sandbaustelle ein - baggere, transportiere, baue mit Fahrzeugen."
    },

    // Körper & Familie
    {
        id: 132,
        title: "Familien-Fotoalbum gestalten",
        ageGroup: "krippe",
        areas: ["emotionen", "sprache"],
        themes: ["familie"],
        goals: ["emotional", "sprache", "sozial"],
        materials: ["Fotos der Familien", "Album", "Kleber", "Stifte"],
        duration: "20-30 Min",
        description: "Familienmitglieder kennenlernen und benennen.",
        shortInstruction: "Klebe Familienfotos ein, benenne Personen, erzähle von Familien."
    },
    {
        id: 133,
        title: "Körperumrisse malen",
        ageGroup: "kiga",
        areas: ["natur", "gesundheit"],
        themes: ["koerper"],
        goals: ["kreativitaet", "selbststaendig", "kognitiv"],
        materials: ["großes Papier", "Stifte", "Farben"],
        duration: "30 Min",
        description: "Körperwahrnehmung durch Umrisse zeichnen.",
        shortInstruction: "Lege ein Kind auf Papier, zeichne den Umriss, male Kleidung und Gesicht."
    },

    // Farben
    {
        id: 134,
        title: "Regenbogen-Experiment",
        ageGroup: "kiga",
        areas: ["natur"],
        themes: ["farben", "wasser"],
        goals: ["kognitiv", "natur", "kreativitaet"],
        materials: ["Wasser", "Spiegel", "Sonnenlicht"],
        duration: "15-20 Min",
        description: "Regenbogen selbst erzeugen.",
        shortInstruction: "Stelle eine Schüssel mit Wasser in die Sonne, halte einen Spiegel hinein - entdecke Regenbogen."
    },
    {
        id: 135,
        title: "Farbentag",
        ageGroup: "krippe",
        areas: ["natur", "sprache"],
        themes: ["farben"],
        goals: ["kognitiv", "sprache", "kreativitaet"],
        materials: ["Gegenstände in einer Farbe", "Kleidung"],
        duration: "ganzer Tag",
        description: "Ein Tag ganz im Zeichen einer Farbe.",
        shortInstruction: "Wähle eine Farbe - alle tragen sie, suchen sie, malen damit, essen sie."
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
    "krippe": { label: "Krippe (1-3)", icon: "🧸" },
    "kiga": { label: "Kindergarten (3-5)", icon: "🎨" },
    "school": { label: "Schulvorbereitung", icon: "🎒" }
};

// Hinweis: Baby-Aktivitäten (ageGroup: "babies") bleiben in der Datenbank,
// werden aber nicht mehr angezeigt, da die Altersgruppe für Elementarpädagogik nicht relevant ist.

// Entwicklungsziele/Kompetenzen-Definitionen
const developmentGoals = {
    feinmotorik: { name: "Feinmotorik", icon: "✋" },
    grobmotorik: { name: "Grobmotorik", icon: "🤸" },
    sprache: { name: "Sprachentwicklung", icon: "💬" },
    sozial: { name: "Soziale Kompetenz", icon: "👥" },
    kognitiv: { name: "Kognitive Fähigkeiten", icon: "🧠" },
    kreativitaet: { name: "Kreativität", icon: "🎨" },
    selbststaendig: { name: "Selbständigkeit", icon: "💪" },
    konzentration: { name: "Konzentration", icon: "🎯" },
    sinne: { name: "Sinneswahrnehmung", icon: "👂" },
    emotional: { name: "Emotionale Entwicklung", icon: "❤️" },
    mathematik: { name: "Mathematik", icon: "🔢" },
    literacy: { name: "Literacy", icon: "📖" },
    natur: { name: "Naturverständnis", icon: "🌿" },
    musik: { name: "Musikalität", icon: "🎵" },
    bewegung: { name: "Bewegungsfreude", icon: "🏃" }
};

// Themen-Definitionen
const themes = {
    // Jahreszeiten
    fruehling: { name: "Frühling", icon: "🌸", category: "season" },
    sommer: { name: "Sommer", icon: "☀️", category: "season" },
    herbst: { name: "Herbst", icon: "🍂", category: "season" },
    winter: { name: "Winter", icon: "❄️", category: "season" },

    // Feste
    ostern: { name: "Ostern", icon: "🐰", category: "celebration" },
    weihnachten: { name: "Weihnachten", icon: "🎄", category: "celebration" },
    fasching: { name: "Fasching", icon: "🎭", category: "celebration" },
    erntedank: { name: "Erntedank", icon: "🌾", category: "celebration" },

    // Beliebte Themen
    tiere: { name: "Tiere", icon: "🐾", category: "topic" },
    bauernhof: { name: "Bauernhof", icon: "🚜", category: "topic" },
    wald: { name: "Wald", icon: "🌲", category: "topic" },
    farben: { name: "Farben", icon: "🎨", category: "topic" },
    koerper: { name: "Körper", icon: "👤", category: "topic" },
    fahrzeuge: { name: "Fahrzeuge", icon: "🚗", category: "topic" },
    familie: { name: "Familie", icon: "👨‍👩‍👧", category: "topic" },
    wasser: { name: "Wasser", icon: "💧", category: "topic" }
};
