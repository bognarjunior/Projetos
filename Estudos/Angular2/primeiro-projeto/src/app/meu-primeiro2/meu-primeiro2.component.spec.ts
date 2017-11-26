import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiro2Component } from './meu-primeiro2.component';

describe('MeuPrimeiro2Component', () => {
  let component: MeuPrimeiro2Component;
  let fixture: ComponentFixture<MeuPrimeiro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPrimeiro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimeiro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
