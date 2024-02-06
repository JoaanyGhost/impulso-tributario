import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  playVideo = true

  ngOnInit(): void {
    this.Reproduccion();
  }

  Reproduccion() {
    const video = document.getElementById('video-fondo') as HTMLVideoElement;
    if (video) {
      if(this.playVideo){
        video.play().then(() => {
        }).catch((error) => {
          console.error('Error en la reproducción automática: ', error);
          this.playVideo = false
        });
      }else{
        video.pause();
      }

    }
  }


  cambioPlay(){
    if(this.playVideo){
      this.playVideo = false;
      this.Reproduccion();
    }else{
      this.playVideo = true;
      this.Reproduccion();
    }

  }
  
}
