import { Component, Inject } from '@angular/core';
import { MyLibService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  //constructor(@Inject('MyLibService') private mine: MyLibService) {}
  constructor(private mine: MyLibService) {}

  doIt(): string {
    // return 'now';
     return this.mine.doGood("NOW");
  }
}
