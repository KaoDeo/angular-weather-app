import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  weatherData: any;
  cityName: string = 'tbilisi';

  constructor(private weatherService: WeatherService) {
    this.weatherService.getWeatherData(this.cityName).subscribe({
      next: (res) => {
        console.log(res);
        this.weatherData = res;
      },
    });
  }

  onSubmit() {
    this.weatherService.getWeatherData(this.cityName).subscribe({
      next: (res) => {
        this.weatherData = res;
      },
    });
    this.cityName = '';
  }

  public farenheitToCelsius(num: number) {
    console.log((num - 32) * (5 / 9));
    return (num - 32) * (5 / 9);
  }
}
