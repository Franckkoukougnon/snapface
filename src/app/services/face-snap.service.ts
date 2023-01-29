import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      author: 'Simplon',
      title: 'Franck Koukougnon',
      description: 'Mon fils tu seras heureux',
      imageUrl: './assets/AJ1.jpeg',
      updateDate: new Date(),
      snaps: 0,
      location: 'Paris',
    },
    {
      id: 2,
      author: ' Bordeaux',
      title: 'Laga Digbeu ',
      description: 'Mon fils tu seras fier',
      imageUrl: './assets/docker.png',
      updateDate: new Date(),
      snaps: 0,
      location: 'Bordeaux',
    },
    {
      id: 3,
      author: 'Simplon',
      title: 'Franck Koukougnon',
      description: 'Mon fils tu seras heureux',
      imageUrl: './assets/AJ1.jpeg',
      updateDate: new Date(),
      snaps: 0,
    },
    {
      id: 3,
      author: 'Krindjabo',
      title: 'Laga Digbeu ',
      description: 'Mon fils tu seras fier',
      imageUrl: './assets/docker.png',
      updateDate: new Date(),
      snaps: 0,
      location: 'Bordeaux',
    },
  ];

  getAllFaceSnap(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('New error !!!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
