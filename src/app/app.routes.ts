import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { signupcomponent } from './pages/signup/signup.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { SongComponent } from './pages/song/song.component';
import { SongCardComponent } from './components/songcard/song-card.component';

export const routes: Routes = [
   { path:'home',  component : HomeComponent},
   {path:'',component:LoginComponent},
   {path:'signup',component:signupcomponent},
{path:'playlist',component:PlaylistComponent},
{path:'song',component:SongComponent},
{path:'songcard',component:SongCardComponent}
];
