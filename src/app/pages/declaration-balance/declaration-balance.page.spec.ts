import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeclarationBalancePage } from './declaration-balance.page';

describe('DeclarationBalancePage', () => {
  let component: DeclarationBalancePage;
  let fixture: ComponentFixture<DeclarationBalancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationBalancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeclarationBalancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
