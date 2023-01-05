import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  ngOnInit() {
    this.buttonText = 'Oh un Snap !!';
  }

  addSnap() {
    if (this.buttonText === 'Oh un Snap !!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oups deja un snap !!!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh un Snap !!';
    }
  }
  addSnap2() {
    this.faceSnap.snaps++;
  }
  addSnap3() {
    this.faceSnap.snaps--;
  }
}
