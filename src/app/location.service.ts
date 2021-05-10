import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocation(latitude, longitude): Observable<any> {
    const key = 'AIzaSyAiv81Y-Lxq29oo1wo7oxo98w_OhwVfT64';

    // const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&location_type=ROOFTOP&result_type=street_address&key=${key}`;

    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&location_type=ROOFTOP&key=${key}`;

    return this.http.get(url);
  }

  getCoords(successCallback, errorCallback): any {
    const options = {
      enableHighAccuracy: true,
      timeout: 1000,
      maximumAge: 0
    };

    return navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options
    );
  }
}
