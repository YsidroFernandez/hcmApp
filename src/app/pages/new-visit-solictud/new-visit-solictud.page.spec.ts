import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewVisitSolictudPage } from './new-visit-solictud.page';

describe('NewVisitSolictudPage', () => {
  let component: NewVisitSolictudPage;
  let fixture: ComponentFixture<NewVisitSolictudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVisitSolictudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewVisitSolictudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
