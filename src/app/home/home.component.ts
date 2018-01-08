import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      console.log(event);
      /* 可以用instanceof来判断事件的类型，然后去做你想要做的事情 */
      console.log(event instanceof NavigationStart);
    });
    this.activeRoute.params.subscribe(
      (params) => {console.log(params); }
    );
  }
}
