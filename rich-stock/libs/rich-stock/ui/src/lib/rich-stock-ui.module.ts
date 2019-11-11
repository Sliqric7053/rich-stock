import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { material } from './ui-material';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhotoRatingComponent } from './components/photo-rating/photo-rating.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...material
  ],
  declarations: [AppLayoutComponent, PhotoRatingComponent],
  exports: [AppLayoutComponent, PhotoRatingComponent, ...material]
})
export class RichStockUiModule {}
