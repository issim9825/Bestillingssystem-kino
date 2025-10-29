package com.example.oblig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BillettController {
    @Autowired
    private BilettRepository rep;

    @PostMapping("/lagre")
    public void lagreBillett(Billett innBillett) {
        rep.lagreBillett(innBillett);
    }

    @GetMapping("/alleBillettene")
    public List<Billett> getAlleBillettene() {
        return rep.getBillett();
    }

    @GetMapping("/hentEnBillett")
    public Billett getHentEnBillett(int id) {
       return rep.hentEnBillett(id);
    }

    @PostMapping("/endreBillett")
    public void endreBillett(Billett billett) {
        rep.endreBillett(billett);
    }

    @GetMapping("/slettAlle")
    public void slettAlle() {
        rep.slettAlle();
    }

    @GetMapping("/slettEn")
    public void slettEnBillett(int id) {
        rep.slettEnBillett(id);
    }
}
