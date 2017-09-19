import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjecaoDependeciaComponent } from './injecao-dependecia.component';

describe('InjecaoDependeciaComponent', () => {
  let component: InjecaoDependeciaComponent;
  let fixture: ComponentFixture<InjecaoDependeciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjecaoDependeciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjecaoDependeciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
