import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject, take, takeUntil, tap } from 'rxjs';
import { FaceSnap } from '../../models/face-snap.models';
import { FaceSnapService } from '../../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  @Input() faceSnaps: FaceSnap[] | undefined;
  private destroy$!: Subject<boolean>;

  constructor(private faceSnapService: FaceSnapService) {}

  ngOnInit() {
    this.faceSnaps = this.faceSnapService.getAllFaceSnap();
    this.destroy$ = new Subject<boolean>();

    interval(1000)
      .pipe(take(10), tap(console.log), takeUntil(this.destroy$))
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
