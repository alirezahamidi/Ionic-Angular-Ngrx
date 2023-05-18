import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MainEffect } from './main.effects';
import { MAIN_FEATURE_KEY } from './main.entity';
import { MainService } from './main.service';
import { MainFacade } from './main.facade';
import { MainReducer } from './main.reducer';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
    StoreModule.forFeature(
        MAIN_FEATURE_KEY,
        MainReducer.reducer
    ),
    EffectsModule.forFeature([MainEffect]),
    CommonModule
    ],
    providers: [MainFacade, MainService]
})
export class MainStateModule {}