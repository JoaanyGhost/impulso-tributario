import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeaderComponent {

  playVideo = true


  @HostListener('document:click', ['$event'])
  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:scroll', ['$event'])
  userActivity(event: Event) {
    this.playVideo = true;
    this.Reproduccion();
  }

  ngOnInit(): void {
  }

  Reproduccion() {
    const video = document.getElementById('video-fondo') as HTMLVideoElement;
    console.log('Video: ', video);
    video.muted = true;
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
