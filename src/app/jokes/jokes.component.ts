import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
  public jokeContent: string = "";
  public saved: boolean = true;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params) => { console.log(params); }
    );
  }

  writeJoke(value) {
    this.jokeContent = value;
    this.saved = false;
  }

  saveContent() {
    console.log(this.jokeContent);
    this.jokeContent = "";
    this.saved = true;
  }

}
