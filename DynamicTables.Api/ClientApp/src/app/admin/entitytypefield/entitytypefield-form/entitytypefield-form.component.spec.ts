import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitytypefieldFormComponent } from './entitytypefield-form.component';

describe('EntitytypefieldFormComponent', () => {
  let component: EntitytypefieldFormComponent;
  let fixture: ComponentFixture<EntitytypefieldFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitytypefieldFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitytypefieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
