import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInvolvedListComponent } from './get-involved-list.component';

describe('GetInvolvedListComponent', () => {
  let component: GetInvolvedListComponent;
  let fixture: ComponentFixture<GetInvolvedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetInvolvedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInvolvedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
