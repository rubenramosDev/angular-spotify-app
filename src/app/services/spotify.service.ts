import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token: string = 'BQDrWU2qWkYbaSQDOMCA2zRdvtKCGnON-2b7_N8DUwbcqrdDksvD16M0DKl9zzfFFnqBb1lOL7nZ0nenAPQ';

  constructor(
    private http: HttpClient
  ) { }


  private getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20&offset=5')
      .pipe(map((response: any) => response.albums.items));
  }

  getArtistBySearch(search: string) {
    return this.getQuery(`search?q=${search}&type=artist&limit=20`)
      .pipe(map((response: any) => response.artists.items));
  }

  getArtist(code: string) {
    return this.getQuery(`artists/${code}`);
  }


  getTopSongs(code: string) {
    return this.getQuery(`artists/${code}/top-tracks?country=US`)
    .pipe(map((response:any)=>response.tracks));
  }
}
