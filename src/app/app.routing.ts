import {Routes, RouterModule} from '@angular/router';

import {IndexComponent} from './index/index.component';

const routes: Routes = [{path: '', component: IndexComponent}, {path: '**', redirectTo: ''}];

export const appRoutingModule = RouterModule.forRoot(routes);
