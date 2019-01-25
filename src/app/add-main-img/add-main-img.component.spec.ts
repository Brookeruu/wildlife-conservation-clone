import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainImgComponent } from './add-main-img.component';

describe('AddMainImgComponent', () => {
  let component: AddMainImgComponent;
  let fixture: ComponentFixture<AddMainImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMainImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMainImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
