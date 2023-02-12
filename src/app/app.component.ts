import { Component, OnInit } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  interval$!: Observable<string>;
  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      map((value) =>
        value % 2 === 0
          ? `${value} est un nombre paire`
          : `${value} est un nombre impaire`
      )
    );
  }
}
