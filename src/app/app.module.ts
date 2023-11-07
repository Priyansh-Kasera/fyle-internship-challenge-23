import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { InputPageComponent } from './components/input-page/input-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputPageComponent,
    UserProfileComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
