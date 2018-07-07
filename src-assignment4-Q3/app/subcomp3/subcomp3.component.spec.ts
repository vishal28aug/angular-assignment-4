import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcomp3Component } from './subcomp3.component';

describe('Subcomp3Component', () => {
  let component: Subcomp3Component;
  let fixture: ComponentFixture<Subcomp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcomp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcomp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
