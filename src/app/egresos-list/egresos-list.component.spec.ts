import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresosListComponent } from './egresos-list.component';

describe('EgresosListComponent', () => {
  let component: EgresosListComponent;
  let fixture: ComponentFixture<EgresosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EgresosListComponent]
    });
    fixture = TestBed.createComponent(EgresosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
