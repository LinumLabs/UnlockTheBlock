import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentPageComponent } from './sent-page.component';

describe('SentPageComponent', () => {
  let component: SentPageComponent;
  let fixture: ComponentFixture<SentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
