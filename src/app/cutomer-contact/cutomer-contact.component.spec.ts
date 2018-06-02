import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerContactComponent } from './cutomer-contact.component';

describe('CutomerContactComponent', () => {
  let component: CutomerContactComponent;
  let fixture: ComponentFixture<CutomerContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomerContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
