import { Component } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'Portfolio';
  constructor(private router: Router){
  }
  goPlaces() {
    this.router.navigate(['/', 'red-pill']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }
}
