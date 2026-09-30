import { Component, ChangeDetectionStrategy } from '@angular/core';
import { faBars, faX} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NavComponent {

  burguer = faBars
  faX = faX

  showHiddenMenu = false


  activeMenu(bool: boolean){
    this.showHiddenMenu = bool

  }
}
