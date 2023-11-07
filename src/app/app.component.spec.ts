import { ComponentFixture,TestBed,async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { InputPageComponent } from './components/input-page/input-page.component';
import { of, throwError } from 'rxjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(() =>{
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getUser']);

    TestBed.configureTestingModule({
      declarations: [AppComponent,InputPageComponent],
      providers: [{ provide: ApiService, useValue: apiServiceSpy }],
    })
     fixture = TestBed.createComponent(AppComponent);
     app = fixture.componentInstance;
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;

  });

  it('should create the app', () => {
   
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fyle-frontend-challenge'`, () => {
   
    expect(app.title).toEqual('fyle-frontend-challenge');
  });

  it('should fetch user info on ngOnInit', async(() => {
    const mockUserInfo = { username: 'johnpapa', name: 'John Papa' };
    apiService.getUser.and.returnValue(of(mockUserInfo));

    app.ngOnInit();

    fixture.whenStable().then(() => {
      expect(app.userInfo).toEqual(mockUserInfo);
    });
  }));

  
});
