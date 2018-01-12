package controller;

import model.Personne;
import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @RequestMapping("/api/hello")
    public String greet(){
        return "Hello from the other side !";
    }

    @RequestMapping("/api/personne")
    public Personne create(){
        return Personne.builder().nom("Ati").prenom("Ghassen Khalil").age(27).build();
    }
}
