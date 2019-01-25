import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMainListComponent } from './edit-main-list.component';

describe('EditMainListComponent', () => {
  let component: EditMainListComponent;
  let fixture: ComponentFixture<EditMainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
