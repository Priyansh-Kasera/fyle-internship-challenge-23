import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { ApiService } from 'src/app/services/api.service';
import { UserProfileComponent } from './user-profile.component';
import { of } from 'rxjs';
import { LoadingScreenComponent } from '../loading-screen/loading-screen.component';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let apiService: jasmine.SpyObj<ApiService>;
  const hero = {
    login: 'testuser',
    name: 'Test User',
  }
  beforeEach(() => {
    apiService = jasmine.createSpyObj('ApiService', ['getUser', 'getRepo']);
    apiService.getRepo.and.returnValue(of(hero));

    TestBed.configureTestingModule({
      declarations: [UserProfileComponent,LoadingScreenComponent],
      providers: [{ provide: ApiService, useValue: apiService }],
    });

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;

    // Initialize test data
    component.userDetail = { public_repos: 20 };
    component.userName = 'testuser';

    fixture.detectChanges();
  });

  it('should create',fakeAsync(
    () => {

      const mockUserData = {
        login: 'testuser',
        name: 'Test User',
      };
    
      apiService.getRepo('testuser',10,1).subscribe((data) => {
        expect(data).toEqual(mockUserData);
      });
    }
  ) );
});
