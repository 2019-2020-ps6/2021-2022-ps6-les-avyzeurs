import {RouterModule, Routes} from '@angular/router';

import {IndexComponent} from './index/index.component';
import {AdminComponent} from "./admin/admin.component";
import {AdminQuizzesComponent} from "./admin/quizzes/admin-quizzes.component";
import {AdminQuizzesCreateComponent} from "./admin/quizzes/create/admin-quizzes-create.component";

const routes: Routes = [{path: '', component: IndexComponent}, {
  path: 'admin', component: AdminComponent, children: [{
    path: 'quizzes', component: AdminQuizzesComponent, children: [{
      path: 'create', component: AdminQuizzesCreateComponent, // child route component that the router renders
    }]
  }]
}, {path: '**', redirectTo: ''}];

export const appRoutingModule = RouterModule.forRoot(routes);
