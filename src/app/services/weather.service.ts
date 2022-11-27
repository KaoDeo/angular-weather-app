import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string) {
    return this.http.get(environment.weatherApiBaseUrl + `/${cityName}/today`, {
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostHeaderValue
        )
        .set(
          environment.XRapidAPIKeyHeaderName,
          environment.XRapidAPIKeyHeaderValue
        ),
      params: new HttpParams().set("mode", "json"),
    });
  }
}
