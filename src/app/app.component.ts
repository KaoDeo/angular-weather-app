import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  weatherData: any;
  cityName: string = 'tbilisi';

  ngOnInit(): void {
    this.weatherService.getWeatherData('tbilisi').subscribe({
      next: (res) => {
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
}
