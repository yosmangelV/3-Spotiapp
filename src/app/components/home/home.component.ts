import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  newReleases: any[] = [];
  loading: boolean;
  error = false;
  messageError: string;

  constructor( private  spotifyService: SpotifyService ) {
    this.loading = true;
    this.spotifyService.getNewReleases()
      .subscribe( (data: any) => {
        this.newReleases = data;
        this.loading = false;
        this.error = false;
      }, (errorServicio) => {
        this.error = true;
        this.loading = false;
        this.messageError = errorServicio.error.error.message;
        console.log(errorServicio);
      });
  }



}
