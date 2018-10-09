import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Lanche } from './lanche';

@Injectable()
export class LancheService {

    lanchesUrl = 'http://localhost:60574/api/lanches';

    constructor(private http: HttpClient) { }

    getLanches(): Observable<Lanche[]> {
        return this.http.get<Lanche[]>(this.lanchesUrl)
    }
}