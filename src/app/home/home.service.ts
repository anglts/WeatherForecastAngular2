import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
    //Observable: emit and subscriber, retorna data solo a los subscritos.
    //best practice: puede ser destruido despues.
    
    weatherObserver: Observable<any>;
    //API free para clima
    //baseUrl: string = 'https://api.weatherbit.io/v1.0/current/postal?key=74954793a7b34830b8ad6e9d3c43cd56';
    baseUrl: string = 'https://api.weatherbit.io/v1.0/forecast/3hourly/postal?key=74954793a7b34830b8ad6e9d3c43cd56';

    constructor(private http: Http) { }

    getWeather(): Observable<any> {
        //let requestUrl = `${this.baseUrl}&postal_code=10001&country=US&lang=es`;
        let requestUrl = `${this.baseUrl}&postal_code=10001&country=US&days=5&units=I&lang=es`;
        return this.weatherObserver = this.http.get(requestUrl).map(res => res.json());
    }
    
}