
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from './../app.error-handler';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Restaurant } from './restaurant/restaurant.model';

import { MEAT_API } from './../app.api';


@Injectable()

export class RestaurantsService {

    constructor(private http: HttpClient) { }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response)
        .catch(ErrorHandler.handleError);
    }
}
