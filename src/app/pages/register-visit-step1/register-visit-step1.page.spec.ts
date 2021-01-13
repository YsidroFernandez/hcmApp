import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterVisitStep1Page } from './register-visit-step1.page';

describe('RegisterVisitStep1Page', () => {
  let component: RegisterVisitStep1Page;
  let fixture: ComponentFixture<RegisterVisitStep1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterVisitStep1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterVisitStep1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
