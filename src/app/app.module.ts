import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './services/hero.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './services/message.service';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InMemoryDataService} from './services/in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material.module';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CardTestComponent } from './card-test/card-test.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu'
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    NavComponent,
    CardTestComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),

    BrowserAnimationsModule,

    LayoutModule,

    MatToolbarModule,

    MatButtonModule,

    MatSidenavModule,

    MatIconModule,

    MatListModule,

    MatGridListModule,

    MatCardModule,

    MatMenuModule,
    MatInputModule
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
