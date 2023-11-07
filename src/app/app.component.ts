import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { InputPageComponent } from './components/input-page/input-page.component';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userInfo: any;
  title : string = "fyle-frontend-challenge"
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUser('johnpapa').subscribe(
      (data) => {
        this.userInfo = data;
      },
      (error) => {
        error.log(error);
      }
    );
  }
}
