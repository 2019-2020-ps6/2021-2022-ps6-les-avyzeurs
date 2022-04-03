import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";

const routes: Routes = [{path: '', pathMatch: 'full', component: IndexComponent}];

export const appRoutingModule = RouterModule.forRoot(routes);
