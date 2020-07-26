import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { }


  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDFcW__yVdtAOVnpHEBdz3wrYNk2V3ZcsCM6ns9a8Nb8ecWNBqwBcGqaU9jDnNQUTLGpEQRtt_TMK70AY4'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?country=FR&limit=20&offset=5')
      .pipe(map((response: any) => response.albums.items));
  }

  getArtistBySearch(search: string) {
    return this.getQuery(`search?q=${search}&type=artist&limit=20`)
      .pipe(map((response: any) => response.artists.items));
  }
}
