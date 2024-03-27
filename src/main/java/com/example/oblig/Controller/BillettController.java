package com.example.oblig.Controller;

import com.example.oblig.Model.Billett;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {
    private final List<Billett> alleBillettene = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBillett(Billett innBillett) {
        alleBillettene.add(innBillett);
    }

    @GetMapping("/alleBillettene")
    public List<Billett> getAlleBillettene() {
        return alleBillettene;
    }

    @GetMapping("/slettAlle")
    public void slettAlle() {
        alleBillettene.clear();
    }
}
