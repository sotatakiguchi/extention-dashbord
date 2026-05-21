import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Extension } from '../models/extension';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExtensionService {

    private url = 'assets/extensions.json';

    constructor(private http: HttpClient) {}

    getAll(): Observable<Extension[]> {
        return this.http.get<Extension[]>(this.url);
    }
}
