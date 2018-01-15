import {Component, OnInit} from '@angular/core';
import {DummyService} from '../dummy.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DummyService]
})
export class HomeComponent implements OnInit {
  nom = {};
  prenom = {};
  age = {};

  constructor(private dummyService: DummyService) {
    /*console.log('Hello');*/
    this.sayHello();
  }

  sayHello() {
    return this.dummyService.sayHello().subscribe(data => {
      this.nom = data.nom;
      this.prenom = data.prenom;
      this.age = data.age;
    });
  }

  ngOnInit() {
  }

}
