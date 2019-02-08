import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitytypefieldComponent } from './entitytypefield.component';

describe('EntitytypefieldComponent', () => {
  let component: EntitytypefieldComponent;
  let fixture: ComponentFixture<EntitytypefieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitytypefieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitytypefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
