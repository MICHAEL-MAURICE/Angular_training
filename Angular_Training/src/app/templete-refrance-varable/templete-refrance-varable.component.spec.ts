import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleteRefranceVarableComponent } from './templete-refrance-varable.component';

describe('TempleteRefranceVarableComponent', () => {
  let component: TempleteRefranceVarableComponent;
  let fixture: ComponentFixture<TempleteRefranceVarableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempleteRefranceVarableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleteRefranceVarableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
