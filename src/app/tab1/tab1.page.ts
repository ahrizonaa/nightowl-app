import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

import { GoogleMap } from '@capacitor/google-maps';

import { CreateMapArgs } from '@capacitor/google-maps/dist/typings/implementation';

import { GoogleMapConfig } from '@capacitor/google-maps/dist/typings/definitions';

type MapOtions = google.maps.MapOptions;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class Tab1Page implements AfterViewInit {
  @ViewChild('map') mapRef: ElementRef<HTMLElement>;
  value: string = btoa('QUl6YVN5Q1RhbTlPVUtqakp3d0hTWGp2T0x1QkJXUGItYldaYXNz');
  map: GoogleMap;
  constructor() {}
  async ngAfterViewInit(): Promise<any> {
    await this.initGoogleMap();
  }

  async initGoogleMap() {
    let mapOptions: CreateMapArgs = {
      id: 'my-map', // Unique identifier for this map instance
      element: this.mapRef.nativeElement, // reference to the capacitor-google-map element
      apiKey: 'AIzaSyCTam9OUKjjJwwHSXjvOLuBBWPb-bWZass', // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8, // The initial zoom level to be rendered by the map
      },
    };

    this.map = await GoogleMap.create(mapOptions);

    await this.map.enableCurrentLocation(true);
  }
}
