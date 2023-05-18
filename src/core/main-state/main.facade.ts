import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MainActions } from './main.actions';
import { mainPartialState, MAIN_FEATURE_KEY } from './main.entity';
import { MainSelectors } from './main.selectors';

@Injectable()
export class MainFacade {
    activePage$ = this.store.pipe(select(MainSelectors.activePage));

    name = MAIN_FEATURE_KEY;

    constructor(
        private store: Store<mainPartialState>
    ) {
    }

    updateActivePage(page: number) {
        this.store.dispatch(MainActions.activePageChanged({ page }))
    }
}
