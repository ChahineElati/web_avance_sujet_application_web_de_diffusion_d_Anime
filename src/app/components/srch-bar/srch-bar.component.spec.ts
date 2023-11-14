import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrchBarComponent } from './srch-bar.component';

describe('SrchBarComponent', () => {
  let component: SrchBarComponent;
  let fixture: ComponentFixture<SrchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
