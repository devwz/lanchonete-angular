import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Lanche } from './lanche';

@Injectable()
export class LanchesService {

    lanchesUrl = 'http://localhost:3000/lanches';

    constructor(private http: HttpClient) { }

    getLanches(): Observable<Lanche[]> {
        return this.http.get<Lanche[]>(this.lanchesUrl)
    }
}