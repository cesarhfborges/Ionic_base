import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private statusBar: StatusBar,
    public platform: Platform
  ) {
    this.initializeApp();
  }

  private initializeApp() {
    if (this.platform.is('cordova')) {
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#9b59b6');
      this.statusBar.styleLightContent();
      this.statusBar.overlaysWebView(false);
    }
  }
}
