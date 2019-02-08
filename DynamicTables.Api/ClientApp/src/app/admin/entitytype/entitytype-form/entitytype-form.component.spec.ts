import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitytypeFormComponent } from './entitytype-form.component';

describe('EntitytypeFormComponent', () => {
  let component: EntitytypeFormComponent;
  let fixture: ComponentFixture<EntitytypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitytypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitytypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
