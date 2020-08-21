import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './list/list.component';
import { FallbackDirective } from '../fallback.directive';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ListpageComponent } from './listpage.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';

export const routes: Routes = [{ path: '', component: ListpageComponent }];

@NgModule({
  declarations: [ListComponent, FallbackDirective, ListpageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes),
  ],
  exports: [ListpageComponent, RouterModule, ListComponent],
})
export class ListModule {}
