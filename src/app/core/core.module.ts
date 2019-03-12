import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './containers/app-component/app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavTabsComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    RouterModule,
    StoreRouterConnectingModule.forRoot(),
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
  ]
})
export class CoreModule {}
