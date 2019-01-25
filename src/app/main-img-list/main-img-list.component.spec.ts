import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImgListComponent } from './main-img-list.component';

describe('MainImgListComponent', () => {
  let component: MainImgListComponent;
  let fixture: ComponentFixture<MainImgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainImgListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
