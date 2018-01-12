package model;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
public class Personne implements Serializable {
    private String nom;
    private String prenom;
    private long age;
}
