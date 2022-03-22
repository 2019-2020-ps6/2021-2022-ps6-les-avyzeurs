import {RouterModule, Routes} from '@angular/router';

import {IndexComponent} from './index/index.component';
import {AdminComponent} from "./admin/admin.component";
import {AdminQuizzesComponent} from "./admin/quizzes/admin-quizzes.component";
import {AdminQuizzesCreateComponent} from "./admin/quizzes/create/admin-quizzes-create.component";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/quizzes', component: AdminQuizzesComponent},
  {path: 'admin/quizzes/create', component: AdminQuizzesCreateComponent},
  {path: '**', redirectTo: ''}];

export const appRoutingModule = RouterModule.forRoot(routes);
