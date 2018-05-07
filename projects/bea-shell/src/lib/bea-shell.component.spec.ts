import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaShellComponent } from './bea-shell.component';

describe('BeaShellComponent', () => {
  let component: BeaShellComponent;
  let fixture: ComponentFixture<BeaShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeaShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
