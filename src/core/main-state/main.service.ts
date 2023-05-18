import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MainService {

  constructor(
    private http: HttpClient
  ) {  }
}
