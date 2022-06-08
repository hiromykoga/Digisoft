import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoguinPrincipalComponent } from './loguin-principal.component';

describe('LoguinPrincipalComponent', () => {
  let component: LoguinPrincipalComponent;
  let fixture: ComponentFixture<LoguinPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoguinPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoguinPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
