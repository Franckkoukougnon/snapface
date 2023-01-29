import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  @Input() faceSnaps!: FaceSnap[];

  constructor(private faceSnapService: FaceSnapService) {}

  ngOnInit() {
    this.faceSnaps = this.faceSnapService.getAllFaceSnap();
  }
}
