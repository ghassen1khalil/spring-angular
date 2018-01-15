import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DummyService {

  constructor(
    private http: Http
  ) {}

  sayHello() {
    return this.http.get(`/api/personne`)
      .map((res: Response) => res.json());
  }
}
