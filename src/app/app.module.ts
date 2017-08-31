import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';// <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './detail/hero-detail.component';

import { HeroService } from './services/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,// <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    RouterModule.forRoot([
        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        },
        {   
          path: 'dashboard',
          component: DashboardComponent
        },
        {
        path: 'heroes',
        component: HeroesComponent
        }     
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
