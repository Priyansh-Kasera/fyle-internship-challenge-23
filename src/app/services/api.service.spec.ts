import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });
  afterEach(() => {
    httpTestingController.verify(); // Verify that there are no outstanding requests
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get user data', () => {
    const mockUserData = {
      login: 'testuser',
      name: 'Test User',
    };

    service.getUser('testuser').subscribe((data) => {
      expect(data).toEqual(mockUserData);
    });

    const req = httpTestingController.expectOne('https://api.github.com/users/testuser');
    expect(req.request.method).toBe('GET');
    req.flush(mockUserData);
  });

  it('should get user repos', () => {
    const mockReposData = [
      { name: 'repo1', description: 'Description for repo1' },
      { name: 'repo2', description: 'Description for repo2' },
    ];

    service.getRepo('testuser', 10, 1).subscribe((data) => {
      expect(data).toEqual(mockReposData);
    });

    const req = httpTestingController.expectOne('https://api.github.com/users/testuser/repos?per_page=10&page=1');
    expect(req.request.method).toBe('GET');
    req.flush(mockReposData);
  });
});
