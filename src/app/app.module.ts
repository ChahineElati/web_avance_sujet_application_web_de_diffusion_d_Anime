import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { InpComponent } from './components/inp/inp.component';
import { FormsModule } from '@angular/forms';
import { BtnComponent } from './components/btn/btn.component';
import { SrchBarComponent } from './components/srch-bar/srch-bar.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AnimeListComponent } from './pages/anime-list/anime-list.component';
import { CardComponent } from './components/card/card.component';
import { AnimeDetailsComponent } from './pages/anime-details/anime-details.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent,},
  {path: 'categories/animelist', component: AnimeListComponent},
  {path: 'categories/animelist/animedetails', component: AnimeDetailsComponent},
  {path: 'categories/animelist/animedetails/episode', component: EpisodeComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'profile', component: ProfileComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InpComponent,
    BtnComponent,
    SrchBarComponent,
    CategoriesComponent,
    AnimeListComponent,
    CardComponent,
    AnimeDetailsComponent,
    EpisodeComponent,
    ProfileComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
