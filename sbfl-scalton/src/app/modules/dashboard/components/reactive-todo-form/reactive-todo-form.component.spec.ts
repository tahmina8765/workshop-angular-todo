import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveTodoFormComponent } from './reactive-todo-form.component';

describe('ReactiveTodoFormComponent', () => {
  let component: ReactiveTodoFormComponent;
  let fixture: ComponentFixture<ReactiveTodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveTodoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveTodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
