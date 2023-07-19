import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from '../components/screens/home-page/home-page.component';
import { LoginPageComponent } from 'src/components/screens/login-page/login-page.component';
import { NavBarComponent } from '../components/common/nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { FollowComponentComponent } from '../components/common/follow-component/follow-component.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    NavBarComponent,
    FollowComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
