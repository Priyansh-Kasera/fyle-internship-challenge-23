import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss'],
})
export class InputPageComponent {
  value: string = '';
  isLoading: boolean = false;
  userNotFound: boolean = false;
  userInfo: any = '';
  constructor(private apiService: ApiService) {}

  onInput(event: any) {
    this.value = event.target.value;
  }
  onClick() {
    if(this.value.trim() === "") return;
    this.isLoading = true;
    this.value = this.value.trim()
    this.apiService.getUser(this.value).subscribe(
      (data) => {
        this.userNotFound = false;
        this.userInfo = data;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      },
      (error) => {
        this.userNotFound = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      }
    );
  }
}
