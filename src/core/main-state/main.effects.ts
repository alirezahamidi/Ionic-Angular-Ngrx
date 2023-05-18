import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MainActions } from './main.actions';
import { MainService } from './main.service';

@Injectable()
export class MainEffect {
    constructor(
        private action$: Actions,
        private service: MainService
      ) { }

}
