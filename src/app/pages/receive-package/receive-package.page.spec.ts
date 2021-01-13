import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceivePackagePage } from './receive-package.page';

describe('ReceivePackagePage', () => {
  let component: ReceivePackagePage;
  let fixture: ComponentFixture<ReceivePackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivePackagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceivePackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
