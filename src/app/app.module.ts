import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ShopComponent } from './page/shop/shop.component';
import { ContactComponent } from './page/contact/contact.component';
import { ShoppingCartComponent } from './page/shopping-cart/shopping-cart.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { HeaderComponent } from './components/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    ContactComponent,
    ShoppingCartComponent,
    AboutUsComponent,
    HeaderComponent,
    MatToolbarModule,
    MatIconModule
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
