import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  loading: boolean;
  artists: any [] =  [];
  constructor( private spotify: SpotifyService ) { }

  buscar( term: string) {
    this.loading = true;
    console.log(term);
    this.spotify.getArtists(term).subscribe((data: any) => {
      this.artists = data;
      this.loading = false;
    });
  }

}
