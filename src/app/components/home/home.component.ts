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

  constructor(
    private spotifyService: SpotifyService
  ) {
    this.fetchingData();
  }

  fetchingData() {
    this.spotifyService.getNewReleases()
      .subscribe((response: any) => {
        console.log(response.albums.items);
        this.newReleases = response.albums.items;
      });

  }

}
