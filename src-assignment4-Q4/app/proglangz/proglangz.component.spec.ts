import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProglangzComponent } from './proglangz.component';

describe('ProglangzComponent', () => {
  let component: ProglangzComponent;
  let fixture: ComponentFixture<ProglangzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProglangzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProglangzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
