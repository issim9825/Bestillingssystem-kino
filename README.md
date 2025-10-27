Bestille kinobilletter
=======

## Quick start
Last ned .jar-fil <a href="https://github.com/issim9825/Bestillingssystem-kino/releases/download/release/Bestillingssystem-kinobilletter.jar">her</a>  
Kjør med
`java -jar ./Bestillingssystem-kinobilletter`
I samme mappe som filen.


## Docs
Fullt navn: Isak Simonsen


Kort beskrivelse av applikasjon:

Applikasjonen er et system for å bestille kinobilletter.
Hvis brukeren skriver input inn feil, kommer en melding ved siden av input 
og gjør inputboksen blank så brukeren kan skrive inn riktig.
Hvis brukeren har skrevet alle input rigktig blir alle inputboksene blanke
og informasjonen legges inn i en tabell.
Hvis brukeren trykker på "Slett alle billettene" blir tabellen borte.

Applikasjonen lagrer nå billettene på server slik at man kan refreshe siden uten å miste alle billettene.
Applikasjonen er nå også stylet ved hjelp av bootstrap.
Det er lagt til en mappe kalt "screenshots" i root som viser hvordan applikajsonen oppfører seg når billetter blir 
lagt til og slettet og at spring boot serveren kjører.


Billettene lagres i en in-memory database på server-siden.

Her er videoen til hvordan den funker:
https://vimeo.com/936609829
