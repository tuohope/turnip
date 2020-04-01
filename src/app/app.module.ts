import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BuyTurnipComponent} from './component/list/buy-turnip/buy-turnip.component';
import {SellTurnipComponent} from './component/list/sell-turnip/sell-turnip.component';
import {RoomDetailComponent} from './component/room-detail/room-detail.component';
import {ListComponent} from './component/list/list.component';
import {CreateRoomModalComponent} from './component/create-room-modal/create-room-modal.component';
import {MaterialModule} from './material.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    BuyTurnipComponent,
    SellTurnipComponent,
    RoomDetailComponent,
    ListComponent,
    CreateRoomModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateRoomModalComponent]
})
export class AppModule { }
