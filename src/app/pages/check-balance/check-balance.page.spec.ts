import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckBalancePage } from './check-balance.page';

describe('CheckBalancePage', () => {
  let component: CheckBalancePage;
  let fixture: ComponentFixture<CheckBalancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBalancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckBalancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
