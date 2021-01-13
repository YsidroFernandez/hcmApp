import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidatePackagePage } from './validate-package.page';

describe('ValidatePackagePage', () => {
  let component: ValidatePackagePage;
  let fixture: ComponentFixture<ValidatePackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatePackagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidatePackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
