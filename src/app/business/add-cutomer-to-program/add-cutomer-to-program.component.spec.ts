import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCutomerToProgramComponent } from './add-cutomer-to-program.component';

describe('AddCutomerToProgramComponent', () => {
  let component: AddCutomerToProgramComponent;
  let fixture: ComponentFixture<AddCutomerToProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCutomerToProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCutomerToProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
