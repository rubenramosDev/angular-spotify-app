import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  newReleases: any[] = [];
  loading:boolean;

  constructor(
    private spotifyService: SpotifyService
  ) {
    this.loading =true;
    this.fetchingData();
  }

  fetchingData() {
    this.spotifyService.getNewReleases()
      .subscribe((response: any) => {
        this.newReleases = response;
        this.loading = false;
      });
  } 

}
