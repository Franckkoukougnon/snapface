import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapService } from '../services/face-snap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.buttonText = 'Oh un Snap !!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
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

  backFaceSnap() {
    this.router.navigateByUrl('facesnaps');
  }
}
