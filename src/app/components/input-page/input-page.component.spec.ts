import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPageComponent } from './input-page.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { ApiService } from 'src/app/services/api.service';

describe('InputPageComponent', () => {
  let component: InputPageComponent;
  let fixture: ComponentFixture<InputPageComponent>;
  let apiService: jasmine.SpyObj<ApiService>;
  beforeEach(() => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getUser']);

    TestBed.configureTestingModule({
      declarations: [InputPageComponent,UserProfileComponent],
      providers: [{ provide: ApiService, useValue: apiServiceSpy }],

    });
    fixture = TestBed.createComponent(InputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
