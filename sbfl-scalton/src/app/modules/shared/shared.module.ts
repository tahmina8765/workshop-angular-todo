import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialsModule } from '../utills/materials/materials.module';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

@NgModule({
  declarations: [TopMenuComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialsModule,
    LayoutModule,
  ],
  exports: [TopMenuComponent]
})
export class SharedModule { }
