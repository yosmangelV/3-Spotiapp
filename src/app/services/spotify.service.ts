import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor( private http: HttpClient) { }

  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCx5lpcS2SmTrWfQqyG3XSAnIH9yZa5QF251kkJmzD7su3yadoqzIckz8mnFQT-7shN2LORA75dP8qnN2k'
    });

    return this.http.get( url , { headers });
  }

  getNewReleases() {

    return this.getQuery(`browse/new-releases?limit=20`)
      .pipe( map( data => data['albums'].items ));
  }

  getArtists(term: string) {

    return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items ));
  }

  getArtist(id: string) {

    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
      .pipe( map( data => data['tracks'] ));
  }
}
