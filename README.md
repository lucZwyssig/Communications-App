# Communications-App
Schulprojekt C(h)at App für das Schulfach "Programmieren 2", von Luc Zwyssig. 

## Aufbau
Das Backend wurde mit Nodejs Express entwickelt. Die Backend greift auf einer MongoDB Datenbank zu. Das Frontend wurde mit React erstellt und greift auf das Backend zu. Das ganze Projekt enthält Docker Orchestrierungsdateien.

## Ordnerstuktur
- /Frontend/communications: Das React app des Frontends
    - src/Pages: Die Seiten der App
    - src/Components: Die Komponente der Seite
    - src/App.js: Das Routing der Seite
    - src/App.css: Das Css der Seite

- /Backend: Das Node App des Backends
    - Controllers: Die Controllers der Seite
    - Models: Die Models der Seite
    - Routes: Die Routes der Seite

- /Documentation: Dokumentation der 

## Dokumentation
- Die relevanten Use Cases im Ordner "Documentation" beschrieben. Dabei gibt es auch ein BPMN Diagramm, welches die verschiedenen Use Cases und ihre Zusammenhänge aufzeigt.

- Die generelle Idee wird auch im Ordner "Documentation" aufgezeigt. Dabei ein schnellen Mockup einer möglichen Seite und ein Systemdiagramm.

## Start
- Git Repo clonen
- Befehl "docker-compose up" durchführen
