import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapService) {}

  ngOnInit() {
    this.buttonText = 'Oh un Snap !!';
  }

  addSnap() {
    if (this.buttonText === 'Oh un Snap !!') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oups deja un snap !!!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh un Snap !!';
    }
  }
  addSnap2() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
  }
}
