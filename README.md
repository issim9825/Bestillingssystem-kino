Bestille kinobilletter
=======

## Quick start
Du kan prøve webappen <a href="https://kinoapp.isaksimonsen.no">her</a>
Eller last ned siste <a href="https://github.com/issim9825/Bestillingssystem-kino/releases/download/release/Bestillingssystem-kinobilletter.jar">release</a>  
Og kjør med 
`java -jar ./Bestillingssystem-kino.jar`  
Må ha java 17 eller en nyere versjon for å kjøre dette programmet.  
Når programmet kjører i terminalen kan du gå inn på localhost:8080 i en browser for å prøve applikasjonen.  
Det er lagt inn 2 eksempel billetter fra før.



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



