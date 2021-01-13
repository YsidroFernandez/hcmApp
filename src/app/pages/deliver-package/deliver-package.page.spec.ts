import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliverPackagePage } from './deliver-package.page';

describe('DeliverPackagePage', () => {
  let component: DeliverPackagePage;
  let fixture: ComponentFixture<DeliverPackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverPackagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliverPackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
