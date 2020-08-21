import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [{ path: '', component: FeedbackComponent }];

@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [FeedbackComponent, RouterModule],
})
export class FeedbackModule {}
