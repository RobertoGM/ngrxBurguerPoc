import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/containers/app-component/app.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthGuard } from './core/services/guards/auth-guard.service';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'restaurant' },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'restaurant',
    loadChildren: './restaurant/restaurant.module#RestaurantModule',
    canActivate: [AuthGuard]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
