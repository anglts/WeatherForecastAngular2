import { Component, OnInit } from '@angular/core';
import { WeatherService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weatherList: any[] = [];
  //currentWeather:any; //TODO: create model for weather
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe((res)=>{
      console.log(res);
      //this.currentWeather = res.data[0];
      for (var index = 0; index < 5; index++) {
        this.weatherList.push(res.data[index*7]);        
      }
    });
  }

  getImageWeather(icon:string){
    let url = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
    return url;
  }

}
