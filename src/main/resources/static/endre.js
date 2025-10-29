$(function () {
    hentEnBillett();
})

// Henter først verdiene for billetten som skal endres
function hentEnBillett() {
    const id = window.location.search.substring(1); // Henter f.eks id=1
    const url = "/hentEnBillett?" + id;
    $.get(url, function (billett) {
        $("#id").val(billett.id);
        $("#film").val(billett.film);
        $("#antall").val(billett.antall);
        $("#fnavn").val(billett.fnavn);
        $("#enavn").val(billett.enavn);
        $("#tlfnr").val(billett.tlfnr);
        $("#epost").val(billett.epost);
    })
}

// Registrerer endring
function endreBillett() {
    const billett = {
        id: $("#id").val(),
        film: $("#film").val(),
        antall: $("#antall").val(),
        fnavn: $("#fnavn").val(),
        enavn: $("#enavn").val(),
        tlfnr: $("#tlfnr").val(),
        epost: $("#epost").val()
    };
    $.post("/endreBillett", billett, function () {
        hentAlle();
    })
    window.location.href = "index.html";
}