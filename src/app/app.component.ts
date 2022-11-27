import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private weatherService: WeatherService) {
    this.weatherService.getWeatherData('tbilisi').subscribe({
      next: (res) => {
        this.weatherData = res;
      },
    });
  }

  weatherData: any;
  cityName: string = 'tbilisi';

  onSubmit() {
    this.weatherService.getWeatherData(this.cityName).subscribe({
      next: (res) => {
        this.weatherData = res;
      },
    });
    this.cityName = '';
  }
}
