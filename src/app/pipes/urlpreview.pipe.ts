import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'urlpreview'
})
export class UrlpreviewPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {

  }
  transform(url: string): any {
    const spoti = 'https://open.spotify.com/';
    url = url.replace('spotify:track:', 'embed/track/');
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${spoti}${url}`);

  }

}
