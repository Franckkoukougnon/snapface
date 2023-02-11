import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private faceSnapService: FaceSnapService,
    private router: Router
  ) {}

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
  onViewFaceSnape() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
