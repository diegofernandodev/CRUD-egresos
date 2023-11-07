import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresosFormComponent } from './egresos-form.component';

describe('EgresosFormComponent', () => {
  let component: EgresosFormComponent;
  let fixture: ComponentFixture<EgresosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EgresosFormComponent]
    });
    fixture = TestBed.createComponent(EgresosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
