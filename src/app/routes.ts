import { Routes } from '@angular/router';
import {RoomDetailComponent} from './component/room-detail/room-detail.component';
import {ListComponent} from './component/list/list.component';

export const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'room',
    component: RoomDetailComponent,
  },
  { path: '**', redirectTo: '/list', pathMatch: 'full' },
];
