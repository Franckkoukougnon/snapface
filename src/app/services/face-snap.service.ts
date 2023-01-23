import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
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
    {
      author: 'Krindjabo',
      title: 'Laga Digbeu ',
      description: 'Mon fils tu seras fier',
      imageUrl: './assets/docker.png',
      updateDate: new Date(),
      snaps: 0,
      location: 'Bordeaux',
    },
  ];
}
