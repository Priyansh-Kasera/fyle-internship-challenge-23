import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  @Input() userDetail: any;
  @Input() userName: any;
  perPage: number;
  pageNo: number;
  isLoading: boolean;
  repoList: any;
  noOfPages: any[];
  options: { value: number; label: number }[] = [];

  constructor(private apiService: ApiService) {
    this.perPage = 10;
    this.pageNo = 1;
    this.isLoading = false;
    this.noOfPages = new Array(10);
    for (let i = 10; i <= 100; i++) {
      const tempObj = {
        value: i,
        label: i,
      };
      this.options.push(tempObj);
    }
  }

  getUserRepos() {
    this.isLoading = true;
    this.apiService.getRepo(this.userName, this.perPage, this.pageNo).subscribe(
      (data) => {
        this.repoList = data;
        setTimeout(() => {
          this.isLoading = false;
        }, 200);
      },
      (error) => {
        error.log(error);
        setTimeout(() => {
          this.isLoading = false;
        }, 200);
      }
    );
  }
  changePageNo(pageNo: number) {
    this.pageNo =
      pageNo <= 0
        ? 1
        : pageNo > this.noOfPages.length
        ? this.noOfPages.length
        : pageNo;
    this.getUserRepos();
  }
  onPerPageNoChange() {
    this.noOfPages = new Array(
      Math.floor(this.userDetail.public_repos / this.perPage) + 1
    );
    this.pageNo = 1;
    this.getUserRepos();
  }
  ngOnInit() {
    this.noOfPages = new Array(
      Math.floor(this.userDetail.public_repos / this.perPage) + 1
    );
    this.getUserRepos();
  }
}
