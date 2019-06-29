import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialsModule } from '../utills/materials/materials.module';
import { ReactiveTodoFormComponent } from './components/reactive-todo-form/reactive-todo-form.component';
import { TemplateTodoFormComponent } from './components/template-todo-form/template-todo-form.component';
@NgModule({
  declarations: [DashboardComponent, ReactiveTodoFormComponent, TemplateTodoFormComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    SharedModule,
    MaterialsModule
  ],
  exports: [DashboardComponent, ReactiveTodoFormComponent, TemplateTodoFormComponent]
})
export class DashboardModule { }
