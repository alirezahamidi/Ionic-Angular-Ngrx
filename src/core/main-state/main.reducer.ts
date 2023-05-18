import { Action, createReducer, on } from '@ngrx/store';
import { MainActions } from './main.actions';
import { mainAdapter, initialState, mainState } from './main.entity';

export class MainReducer {
    static _reducer = createReducer(initialState,
        on(MainActions.activePageChanged, (state, { page }) => ({
            ...state,
            loaded: false,
            message: null,
            statistics: [],
            error: null,
            submitted: false,
            activeTabNumber: page
        }))
    );

    static reducer(state: mainState, action: Action) {
        return MainReducer._reducer(state, action);
    }
}
