import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {FirebaseService} from './services/firebase.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlayersComponent } from './components/players/players.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlayerComponent } from './components/player/player.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCyf4ETU19_0WQtK5xP8A-HSKdF7Dv3Mrs',
  authDomain: 'mississauga-dolphins-players.firebaseapp.com',
  databaseURL: 'https://mississauga-dolphins-players.firebaseio.com',
  storageBucket: 'mississauga-dolphins-players.appspot.com',
  messagingSenderId: '513860704688'
};

const FirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
{path:'', component:HomeComponent},
{path:'players', component:PlayersComponent},
{path: 'player/:id', component:PlayerComponent},
{path:'add-player', component:AddPlayerComponent},
{path: 'edit-player/:id', component:EditPlayerComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersComponent,
    NavbarComponent,
    PlayerComponent,
    AddPlayerComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig,FirebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
