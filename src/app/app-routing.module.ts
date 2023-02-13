import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './component/face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './component/face-snap/face-snap.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './component/single-face-snap/single-face-snap.component';

const routes: Routes = [
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
