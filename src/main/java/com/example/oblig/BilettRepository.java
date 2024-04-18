package com.example.oblig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BilettRepository {
    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(Billett b) {
        String sql="INSERT INTO BILLETT(FILM, ANTALL, FNAVN, ENAVN, TLFNR, EPOST) VALUES ( ?,?,?,?,?,? )";
        db.update(sql, b.getFilm(), b.getAntall(),b.getFnavn(),b.getEnavn(),b.getTlfnr(),b.getEpost());
    }

    public List<Billett> getBillett() {
        String sql="SELECT * FROM BILLETT ORDER BY ENAVN";
        return db.query(sql, new BeanPropertyRowMapper<>(Billett.class));
    }

    public void slettAlle() {
        String sql="DELETE FROM BILLETT";
        db.update(sql);
    }
}
