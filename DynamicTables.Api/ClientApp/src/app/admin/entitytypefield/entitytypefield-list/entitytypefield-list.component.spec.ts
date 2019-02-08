import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitytypefieldListComponent } from './entitytypefield-list.component';

describe('EntitytypefieldListComponent', () => {
  let component: EntitytypefieldListComponent;
  let fixture: ComponentFixture<EntitytypefieldListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitytypefieldListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitytypefieldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
