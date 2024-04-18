$(function () {
    $.get("/alleBillettene", function (data) {
        if (data !== []) {
            hentAlle()
        }
    })
});

function visBilletter() {
    let film = document.getElementById("film").value;
    let antall = parseInt(document.getElementById("antall").value)
    const fnavn = document.getElementById("fnavn").value;
    const enavn = document.getElementById("enavn").value;
    let tlfnr = document.getElementById("tlfnr").value;
    let epost = document.getElementById("epost").value;

    let error = NaN;


    // Sjekker om en film er valgt
    if (film.match(/Velg film her/)) {
        $("#filmsjekk").text("\tMå velge en film");
        error = 1;
    } else {
        $("#filmsjekk").text("");
    }

    // Skjekker om et tall er skrevet inn
    if (isNaN(antall) || antall <= 0) {
        $("#antallsjekk").text("Må skrive noe i antall");
        document.getElementById("antall").value = "";
        error = 1;
    } else {
        $("#antallsjekk").text("");
    }

    // Skjekker om navn er skrevet inn riktig
    const navnRegex = /(\s|\s+)|(\d|\d+)/;
    if (navnRegex.test(fnavn)) {
        $("#fnavnsjekk").html("Må skrive noe inn i fornavnet");
        $("#fnavn").val("");
        error = 1;
    } else {
        $("#fnavnsjekk").text("");
    }

    if (navnRegex.test(enavn)) {
        $("#enavnsjekk").text("Må skrive noe inn i etternavnet");
        $("#enavn").val("");
        error = 1;
    } else {
        $("#enavnsjekk").text("")
    }


    // Skjekker om et gyldig telefonnummer er skrevet inn
    if (validateTlfnr(tlfnr)) {
        $("#tlfnrsjekk").text("")
    } else {
        $("#tlfnrsjekk").text("Må skrive noe i telefonnr");
        $("#tlfnr").val("");
        error = 1;
    }

    // Skjekker om epost er gyldig
    if (validateEpost(epost)) {
        $("#epostsjekk").text("");
    } else {
        $("#epostsjekk").text("Må skrive noe i epost");
        $("#epost").val("");
        error = 1;
    }

    // Oppretter billetten som objekt
    let billett = {
        film: film,
        antall: antall,
        fnavn: fnavn,
        enavn: enavn,
        tlfnr: tlfnr,
        epost: epost
    };

    // Legger inn billett hvis input er skrevet inn riktig
    if (isNaN(error)) {
        $.post("/lagre", billett, function () {
            hentAlle();
        })
        clearInput();
    }
}

function hentAlle() {
    $.get("/alleBillettene", function (data) {
        formaterData(data);
    })
}

function formaterData(billetter) {
    let ut = "<table class='table table-striped'><tr>" + "<th>Film</th>" + "<th>Antall</th>" +
        "<th>Fornavn</th>" + "<th>Etternavn</th>" + "<th>Telefonnr</th>" +
        "<th>Epost</th>" + "</tr>";

    // Skriver ut billetten i tabell
    for (let b of billetter) {
        ut += "<tr><td>" + b.film + "</td><td class='text-center'>" + b.antall +
            "</td><td>" + b.fnavn + "</td><td>" + b.enavn +
            "</td><td class='text-right'>" + b.tlfnr + "</td><td>" + b.epost.toLowerCase() +
            "</td></tr>";
    }
    ut += "</table>";
    $("#utskrift").html(ut);
}

function slett() {
    $.get("/slettAlle", function () {
        window.location.href = "/";
    })
}

function validateTlfnr(tlfnr) {
    // validerer om et nummer er 8 sifre
    const tlfnrRegex = /\d{8}/;
    return tlfnrRegex.test(tlfnr);
}

function validateEpost(epost) {
    // validerer om en epost er riktig
    const epostRegex = /[^\s@]+@+[^\s@]+.+[^\s@]+/;
    return epostRegex.test(epost);
}


function clearInput() {
    $("#film").val("Velg film her");
    $("input").val("");
}
