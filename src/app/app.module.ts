import { BrowserModule    } from '@angular/platform-browser';
import { NgModule         } from '@angular/core';
import { RouterModule     } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


// Components
import { AppComponent    } from './app.component';
import { HomeComponent   } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';

//Services

//Routes 
import { ROUTES } from './app.routes';
import { CardsComponent } from './components/shared/components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';


//Pipes
import { NoImagePipe } from './pipes/no-image.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistComponent,
    NavbarComponent,
    SearchComponent,
    NoImagePipe,
    DomseguroPipe,
    CardsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
