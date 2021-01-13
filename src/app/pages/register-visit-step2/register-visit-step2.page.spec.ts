import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterVisitStep2Page } from './register-visit-step2.page';

describe('RegisterVisitStep2Page', () => {
  let component: RegisterVisitStep2Page;
  let fixture: ComponentFixture<RegisterVisitStep2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterVisitStep2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterVisitStep2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
