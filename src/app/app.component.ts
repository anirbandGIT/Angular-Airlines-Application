import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'airline-checkin';
  icons = [
    { name: 'flight_arrival', type: 'svg', location: 'assets/icons/' },
    { name: 'flight_departure', type: 'svg', location: 'assets/icons/' },
    { name: 'location_map', type: 'svg', location: 'assets/icons/' },
    { name: 'traveler_with_suitcase', type: 'svg', location: 'assets/icons/' },
    { name: 'plane', type: 'svg', location: 'assets/icons/' },
    { name: 'user_admin', type: 'svg', location: 'assets/icons/' },
    { name: 'extra_luggage', type: 'svg', location: 'assets/icons/' },
    { name: 'luggage_scale', type: 'svg', location: 'assets/icons/' },
    { name: 'dashboard_interface', type: 'svg', location: 'assets/icons/' },
    { name: 'bell', type: 'svg', location: 'assets/icons/' },
  ];

  // <mat-icon> displays SVG icons by directly inlining the SVG content into the DOM as a child of itself.
  // This approach offers an advantage over an <img> tag or a CSS background-image because
  // it allows styling the SVG with CSS
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  private registerIcons(): void {
    for (const icon of this.icons) {
      this.iconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          icon.location + icon.name + '.' + icon.type
        )
      );
    }
  }
}
