import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor(
    private http: HttpClient
  ) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD1fqjG72wlJ1Vuv_02-Oj0RJhEIiy0YyyIK4SThK0RigbDN0U5uNW4Ra3MMsUYS2ygNYjCDKhLuc1shbQ'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=FR&limit=20&offset=5', { headers });
  }
}
