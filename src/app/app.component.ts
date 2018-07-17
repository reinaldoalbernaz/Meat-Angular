import { Component, OnInit } from '@angular/core';
import { UF } from './estados';

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome do Meat App!';

  map: { id: string; name: string }[] = [];

  constructor() { }

  ngOnInit() {
    for (let n in UF) {
      if (typeof UF[n] === 'string') {
        this.map.push({ id: <any>UF[n], name: n });
      }
    }
    console.log(this.map);
  }


}

