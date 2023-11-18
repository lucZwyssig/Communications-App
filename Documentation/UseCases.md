# Use Cases
Die relevanten Use Cases der C(h)at App

## UC1 neues Konto erstellen

- Motivation: Kunde will mit der neuen Chat App mitmachen / eine Gruppe beitreten / eine Nachricht schreiben
- Auslöser(in): Kunde
- Input: Username, Password
- Rate: ca. 2 Mal / Tag
- Output: JWT Token
- Grober Ablauf: Der Kunde geht auf die Chat App Seite und wird angefordert, ein neues Konto zu erstellen. Kunde gibt Username, Password ein und wird zu der Chat Seite weitergeleitet.
- Reaktionszeit: ca. 3s

## UC2 anmelden
- Motivation: Kunde will eine Gruppe beitreten / eine Nachricht schreiben / eine Gruppe verlassen / Feedback senden
- Auslöser(in): Kunde
- Input: Username, Password
- Rate: ca. 20 Mal / Tag
- Output: JWT Token
- Grober Ablauf: Der Kunde geht auf die Chat App Seite und wird angefordert, sich einzuloggen. Kunde gibt Username, Password ein und wird zur Chat Seite weitergeleitet.
- Reaktionszeit: ca. 3s

## UC3 Gruppe erstellen
- Motivation: Kunde will eine neue Gruppe erstellen
- Auslöser(in): Kunde
- Input: Gruppenname
- Rate: ca. 3 Mal / Tag
- Output: neue Gruppe
- Grober Ablauf: Kunde drückt auf "neue Gruppe erstellen" und gibt den Gruppenname ein. Eine neue Chat Gruppe wird erstellt.
- Reaktionszeit: ca. 3s

## UC4 Nachricht erfassen
- Motivation: Kunde will eine Nachricht schreiben
- Auslöser(in): Kunde
- Input: Inhalt der Nachricht
- Rate: ca. 100 Mal / Tag
- Output: neue Nachricht
- Grober Ablauf: Kunde geht zur erwünschten Gruppe und gibt im Textfeld eine Nachricht ein. Die Nachricht wird erstellt und aufgezeigt.
- Reaktionszeit: ca. 3s

## UC5 Gruppenmitglied hinzufügen
- Motivation: Kunde will ein Gruppenmitglied hinzufügen
- Auslöser(in): Kunde
- Input: Username
- Rate: ca. 5 Mal / Tag
- Output: neuer Gruppenmitglied erstellt
- Grober Ablauf: Kunde geht zur gewünschten Gruppe. Kunde wird aufgefordert den Username des Users einzugeben. Falls existent, wird dieser hinzugefügt. Falls nicht, wird not found zurückgegeben.
- Reaktionszeit: ca. 3s

## UC6 Gruppe verlassen
- Motivation: Kunde will nicht mehr in einer Gruppe sein
- Auslöser(in): Kunde
- Input: n/a
- Rate ca. 1 Mal / Woche
- Output: Gruppe verlassen
- Grober Ablauf: Kunde geht zur Gruppe und drückt auf "Gruppe verlassen". Der Kunde verlässt die Gruppe.

## UC7 Feedback geben
- Motivation: Kunde hat Verbesserungsvorschlag
- Auslöser(in): Kunde
- Input: Email, Idee, kurze Beschreibung
- Rate: ca. 1 Mal / Woche
- Output: Email feedback gesendet
- Grober Ablauf: Kunde geht zur "Feedback senden" Seite und gibt die Infos ein. Eine Email wird an mich gesendet mit dem Verbesserungsvorschlag.
- Reaktionszeit: ca. 6s

## UC8 Ausloggen
- Motivation: Kunde will die Seite verlassen und sich abmelden
- Auslöser(in): Kunde
- Input: n/a
- Rate: ca. 20 Mal / Tag
- Output: (JWT Token gelöscht)
- Grober Ablauf: Kunde drückt auf "ausloggen" und wird ausgeloggt.
- Reaktionszeit: ca. 1s


