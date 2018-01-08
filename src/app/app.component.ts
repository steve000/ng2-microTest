import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor() { }

  ngOnInit() {
    // this.translate.addLangs(["zh", "en"]);
    // this.translate.setDefaultLang('zh');
    // const browserLang = this.translate.getBrowserLang();
    // this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }
}
