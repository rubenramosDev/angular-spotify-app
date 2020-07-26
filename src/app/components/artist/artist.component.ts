import { Component, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {

  artist: any;
  flag: boolean;
  songs: any[] = [];


  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.init();
  }

  init() {
    this.flag = true;
    this.route.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopSongs(params['id']);
    });
  }

  getArtist(code: string) {
    this.spotifyService.getArtist(code)
      .subscribe(response => {
        this.artist = response;
        this.flag = false;
      });
  }

  getTopSongs(code: string) {
    this.spotifyService.getTopSongs(code)
      .subscribe(response => {
        this.songs = response;
        console.log(this.songs);
      });
  }
}
