import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        author: 'Simplon',
        title: 'Franck Koukougnon',
        description: 'Mon fils tu seras heureux',
        imageUrl: './assets/AJ1.jpeg',
        updateDate: new Date(),
        snaps: 200,
        location: 'Paris',
      },
      {
        author: ' Bordeaux',
        title: 'Laga Digbeu ',
        description: 'Mon fils tu seras fier',
        imageUrl: './assets/docker.png',
        updateDate: new Date(),
        snaps: 0,
        location: 'Bordeaux',
      },
      {
        author: 'Simplon',
        title: 'Franck Koukougnon',
        description: 'Mon fils tu seras heureux',
        imageUrl: './assets/AJ1.jpeg',
        updateDate: new Date(),
        snaps: 0,
      },
    ];
  }
}
