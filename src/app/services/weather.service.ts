import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string) {
    return this.http.get(
      environment.weatherApiBaseUrl +
        '/1600%20Pennsylvania%20Avenue%20NW%20Washington,%20D.C/today?unitGroup=us',
      {
        headers: new HttpHeaders()
          .set(
            environment.XRapidAPIHostHeaderName,
            environment.XRapidAPIHostHeaderValue
          )
          .set(
            environment.XRapidAPIKeyHeaderName,
            environment.XRapidAPIKeyHeaderValue
          ),
        params: new HttpParams()
          .set('mode', 'json')
          .set('location', '1600 Pennsylvania Avenue NW Washington, D.C'),
      }
    );
  }
}
