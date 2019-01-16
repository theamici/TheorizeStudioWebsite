import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit {

  @ViewChild('audioToggler') audioToggler: ElementRef;
  audioToggle: boolean = true;
  audioVolume: number = 0.7;

  downAudio: HTMLAudioElement;
  topAudio: HTMLAudioElement;
  subtitleAudio: HTMLAudioElement;

  constructor(private renderer: Renderer2) {}

  ngOnInit()
  {
    if(localStorage.getItem("audioToggle") == "FALSE")
    {
      this.toggleAudio();
    }

    this.downAudio = <HTMLAudioElement>(document.getElementById("downAudio"));
    this.topAudio = <HTMLAudioElement>(document.getElementById("topAudio"));

    this.downAudio.volume = this.audioVolume;
    this.topAudio.volume = this.audioVolume;
  }

  toggleAudio() {
    if(this.audioToggle) {
      this.renderer.removeClass(this.audioToggler.nativeElement, "fa-volume-up");
      this.renderer.addClass(this.audioToggler.nativeElement, "fa-volume-off");
      this.downAudio.volume = 0;
      this.topAudio.volume = 0;
      localStorage.setItem("audioToggle", "FALSE");
    }
    else {
      this.renderer.removeClass(this.audioToggler.nativeElement, "fa-volume-off");
      this.renderer.addClass(this.audioToggler.nativeElement, "fa-volume-up");
      this.downAudio.volume = this.audioVolume;
      this.topAudio.volume = this.audioVolume;
      localStorage.setItem("audioToggle", "TRUE");
    }

    this.audioToggle = !this.audioToggle;
  }
}