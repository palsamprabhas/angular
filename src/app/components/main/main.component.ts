import { Component, OnInit } from '@angular/core';
import { PwaService } from 'src/app/services/install-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public a2hs: PwaService) {
    a2hs.checkUserAgent();
    a2hs.trackStandalone();
    window.addEventListener('beforeinstallprompt', (e) => {
      a2hs.promptIntercepted = true;
      e.preventDefault();
      a2hs.deferredPrompt = e;
      a2hs.promptSaved = true;

    });
    window.addEventListener('appinstalled', (evt) => {
      a2hs.trackInstalled();
    });
  }
  ngOnInit(): void {
  }

}
