import { Component } from '@angular/core';
import {t} from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hiii Guyss!!' ;
  public options = {
    position : [ 'bottom' , 'right' ],
    timeOut : 3000,
    lastOnBottom: true,
    clickToClose: true,
    clickIconToClose: true
    // timeOut: 3000,
    // showProgressBar: true,
    // pauseOnHover: true,
    // clickToClose: false,
    // clickIconToClose: true
  };
}
