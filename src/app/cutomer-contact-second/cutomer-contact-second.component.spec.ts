import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerContactSecondComponent } from './cutomer-contact-second.component';

describe('CutomerContactSecondComponent', () => {
  let component: CutomerContactSecondComponent;
  let fixture: ComponentFixture<CutomerContactSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomerContactSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomerContactSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
