import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { InpComponent } from './components/inp/inp.component';
import { FormsModule } from '@angular/forms';
import { BtnComponent } from './components/btn/btn.component';
import { SrchBarComponent } from './components/srch-bar/srch-bar.component';
import { CategoriesComponent } from './pages/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InpComponent,
    BtnComponent,
    SrchBarComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
