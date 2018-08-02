import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent {

  @ViewChild('audioToggler') audioToggler: ElementRef;
  audioToggle: boolean = true;

  constructor(private renderer: Renderer2) {}

  toggleAudio() {
    if(this.audioToggle) {
      this.renderer.removeClass(this.audioToggler.nativeElement, "fa-volume-up");
      this.renderer.addClass(this.audioToggler.nativeElement, "fa-volume-off");
    }
    else {
      this.renderer.removeClass(this.audioToggler.nativeElement, "fa-volume-off");
      this.renderer.addClass(this.audioToggler.nativeElement, "fa-volume-up");
    }

    this.audioToggle = !this.audioToggle;
    
    // apply volume control
  }
}
