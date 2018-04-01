import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  overallLoading = false;

  constructor() {
    setTimeout(() => {
      this.overallLoading = true;
    }, 5000);
  }
}
