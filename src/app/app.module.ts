import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponentComponent} from './first-component/first-component.component';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CanActivateGuard} from './can-activate.guard';

const routes =[
  {
    path:'',
    redirectTo:'first',
    pathMatch:'full'
  },
  {
    path:'first',
    component: FirstComponentComponent
  },
  {
    path:'second',
    children:[
      {
        path:'',
        component: SecondComponent
      },
      {
        path:'first',
        component:FirstComponentComponent, 
        canActivate:[CanActivateGuard]
      }
    ]
  },
  {
    path:"**",
    component: NotFoundComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
