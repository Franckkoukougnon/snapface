import { Component, OnInit } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { filter } from 'rxjs/internal/operators/filter';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  interval$!: Observable<string>;
  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      filter((values) => values % 3 === 0),
      map((value) =>
        value % 2 === 0
          ? `${value} est un nombre paire`
          : `${value} est un nombre impaire`
      ),
      tap((text) => this.logger(text))
    );
  }

  logger(text: string): void {
    console.log(`Log: ${text}`);
  }
}
