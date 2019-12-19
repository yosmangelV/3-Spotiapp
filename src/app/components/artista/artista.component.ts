import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  artista: any = {};
  loading: boolean;
  topTracks: any = [];

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService,
               private location: Location) {
    this.router.params.subscribe( data => {
      this.loading = true;
      this.getArtista(data.id);
      this.getTopTracks(data.id);
    });
  }

  getArtista(id: string) {
    this.spotify.getArtist(id).subscribe( data => {
      console.log(data);
      this.artista = data;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe( data => {
      console.log(data);
      this.topTracks = data;
    });
  }
  goBack() {
    this.location.back();
  }
}
