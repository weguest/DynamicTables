import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitytypeComponent } from './entitytype.component';

describe('EntitytypeComponent', () => {
  let component: EntitytypeComponent;
  let fixture: ComponentFixture<EntitytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
