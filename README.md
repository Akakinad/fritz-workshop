# FRITZ!Box Workshop – Reverse Engineering & CLI-Entwicklung

<!-- mdformat-toc start --slug=github --maxlevel=6 --minlevel=2 -->

- [Einführung](#einf%C3%BChrung)
- [Workshop-Überblick](#workshop-%C3%BCberblick)
  - [Teamarbeit](#teamarbeit)
- [Benötigte Materialien](#ben%C3%B6tigte-materialien)
- [Zeitplan](#zeitplan)
- [Phase 1: FRITZ!Box Hardware Reverse Engineering (ca. 2 Stunden)](#phase-1-fritzbox-hardware-reverse-engineering-ca-2-stunden)
- [Phase 2: FRITZ!Box Webinterface Reverse Engineering (ca. 2 Stunden)](#phase-2-fritzbox-webinterface-reverse-engineering-ca-2-stunden)
- [Phase 3: CLI-Entwicklung & Use-Case-Umsetzung (Vollständiger Tag)](#phase-3-cli-entwicklung--use-case-umsetzung-vollst%C3%A4ndiger-tag)
  - [Vorschlag zu Ausbaustufen der CLI](#vorschlag-zu-ausbaustufen-der-cli)
- [Projektorganisation & Tipps](#projektorganisation--tipps)
- [Viel Erfolg!](#viel-erfolg)

<!-- mdformat-toc end -->

## Einführung<a name="einf%C3%BChrung"></a>

Willkommen zum FRITZ!Box Workshop! In diesem Workshop werdet ihr in die Welt des Reverse Engineerings und der Netzwerktechnologie eintauchen. Ziel ist es so viel ihr könnt über die HTTP- und Serielle Schnittstelle herauszufinden und mit den Erkenntnissen ein Kommandozeilenprogramm zur Steuerung zu entwickeln.

## Workshop-Überblick<a name="workshop-%C3%BCberblick"></a>

Der Workshop ist in drei Phasen unterteilt, die aufeinander aufbauen.

- **Phase 1 & 2 (4 Stunden):** Reverse Engineering der FRITZ!Box – Hardware und Webinterface
- **Phase 3 (Vollständiger Tag):** CLI-Entwicklung und Use-Case-Umsetzung

### Teamarbeit<a name="teamarbeit"></a>

- **Phase 1 & 2:** Arbeit in Zweierteams.
- **Phase 3:** Zusammenschluss zu Viererteams.

## Benötigte Materialien<a name="ben%C3%B6tigte-materialien"></a>

- FRITZ!Box (Modell wird bei Workshopbeginn bekannt gegeben)
- Schraubenzieher
- Lötstation, Lötzinn und Flux
- Serial-Adapter (USB zu TTL)
- Jumperkabel
- Laptop mit Internetzugang und Entwicklungsumgebung
- Netzwerkkabel

## Zeitplan<a name="zeitplan"></a>

| Zeit              | Aktivität                                           | Teamgröße |
| ----------------- | --------------------------------------------------- | --------- |
| Tag 1, Vormittag  | Phase 1: FRITZ!Box Hardware Reverse Engineering     | 2er Teams |
| Tag 1, Nachmittag | Phase 2: FRITZ!Box Webinterface Reverse Engineering | 2er Teams |
| Tag 2, Ganztägig  | Phase 3: CLI-Entwicklung & Use-Case-Umsetzung       | 4er Teams |

## Phase 1: FRITZ!Box Hardware Reverse Engineering (ca. 2 Stunden)<a name="phase-1-fritzbox-hardware-reverse-engineering-ca-2-stunden"></a>

**Ziel:** Ziel ist es, einen Zugang zur FRITZ!Box über die serielle Schnittstelle herzustellen und tiefgründige Informationen über das System zu sammeln.

**Aufgaben:**

1. Identifiziert die serielle Schnittstelle auf der FRITZ!Box-Platine.
1. Lötet einen Debug-Stecker an die serielle Schnittstelle an.
1. Verbindet die FRITZ!Box über den Serial-Adapter mit eurem Laptop.
1. Konfiguriert eure Software (z.B. Minicom, PuTTY, screen, tio) für die serielle Kommunikation.
1. Dokumentiert alle Informationen die ihr über die serielle Schnittstelle herausfinden könnt, hebt die für euch erstaunlichen Infos hervor (z.B. Bootloader-Ausgabe, Login-Prompt, etc.) und ändert Dinge am System die euch interessieren, wundern oder Spaß machen.
1. Dokumentiert eure Vorgehensweise und alle gefundenen Informationen.

**Präsentation:** Nach Ablauf der Zeit präsentiert jedes Team kurz (ca. 5 Minuten) seine Ergebnisse und Erkenntnisse.

## Phase 2: FRITZ!Box Webinterface Reverse Engineering (ca. 2 Stunden)<a name="phase-2-fritzbox-webinterface-reverse-engineering-ca-2-stunden"></a>

**Ziel:** Analyse der FRITZ!Box Webinterfaces, um die Funktionsweisen und Kommunikationsmechanismen zu verstehen.

**Aufgaben:**

1. Untersucht das FRITZ!Box Webinterface und dokumentiert die wichtigsten Funktionen.
1. Analysiert die HTTP-Requests, die beim Aufrufen verschiedener Seiten und Funktionen gesendet werden (z.B. mit den Entwicklertools eures Browsers).
1. Identifiziert interessante Parameter, Datenformate und APIs.
1. Versucht, Zusammenhänge zwischen den Informationen aus der seriellen Schnittstelle und dem Webinterface herzustellen.
1. Dokumentiert eure Vorgehensweise und alle gefundenen Informationen.

**Präsentation:** Nach Ablauf der Zeit präsentiert jedes Team kurz (ca. 5 Minuten) seine Ergebnisse und Erkenntnisse.

## Phase 3: CLI-Entwicklung & Use-Case-Umsetzung (Vollständiger Tag)<a name="phase-3-cli-entwicklung--use-case-umsetzung-vollst%C3%A4ndiger-tag"></a>

**Ziel:** Entwicklung einer Kommandozeilen-Schnittstelle (CLI) zur Steuerung der FRITZ!Box, basierend auf den Erkenntnissen aus den vorherigen Phasen.

**Teamarbeit:** Die Zweierteams aus Phase 1 & 2 bilden jeweils ein Viererteam.

**Use-Case:** Die CLI soll eine Reihe von Funktionen zur Verfügung stellen, um die FRITZ!Box zu steuern und Informationen abzurufen.

### Vorschlag zu Ausbaustufen der CLI<a name="vorschlag-zu-ausbaustufen-der-cli"></a>

| Ausbaustufe | Funktionen                                                                                                                                                                                                             |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0           | Einen Reboot auslösen (via Serial)                                                                                                                                                                                     |
| 1           | Einen Reboot auslösen (via HTTP)                                                                                                                                                                                       |
| 2           | Ausgabe von zum Gerät spezifischen Informationen                                                                                                                                                                       |
| 3           | WLAN an/aus-schalten, SSID/Passwort ausgeben, FRITZ!Smarthome Gerät ansteuern                                                                                                                                          |
| 4           | Eigene Funktion, Supportdaten abrufen, WLAN WPS aktivieren, SIP Telefonie, Faxen, Netzwerkgeräte auflisten, WLAN-Netze scannen, Temperatur von Chips ausgeben, NAS-Interaktion, VPN-Konfiguration, WLAN-Geräte sperren |

**Wichtige Hinweise:**

- Konzentriert euch auf die Umsetzung der Ausbaustufen 0-3 mit der höchsten Priorität.
- Für Ausbaustufe 4 könnt ihr entweder eine eigene Funktion entwickeln oder eine der optionalen Funktionen implementieren.
- Nutzt die Erkenntnisse aus Phase 1 und 2, um die CLI effizient zu gestalten.
- Achtet auf eine gute Code-Qualität und Dokumentation.
- Die Ausbaustufen sind Optional, ihr könnt beliebig viele und andere Funktionen implementieren.

**Präsentation:** Am Ende des Workshops präsentiert jedes Team seinen CLI-Prototypen und demonstriert die implementierten Funktionen. (Keine Slides notwendig)

## Projektorganisation & Tipps<a name="projektorganisation--tipps"></a>

- **Zeitmanagement:** Plant eure Zeit realistisch und priorisiert die wichtigsten Aufgaben.
- **Versionskontrolle:** Nutzt Git und ein Repository (Forgejo), um eure Codebasis zu verwalten.
  - Erstellt dafür einen Fork von diesem Repository.
- **Aufgabenverteilung:** Teilt die Aufgaben innerhalb des Teams auf und kommuniziert regelmäßig.
- **Testen:** Testet eure CLI gründlich, um Fehler zu vermeiden.
- **Dokumentation:** Dokumentiert eure Codebasis und eure Vorgehensweise.

## Viel Erfolg!<a name="viel-erfolg"></a>

Wir wünschen euch viel Spaß und Erfolg bei diesem Workshop!


Treiber CP210* MacOS https://community.silabs.com/s/article/cp210x-mac-os-drivers?language=en_US
