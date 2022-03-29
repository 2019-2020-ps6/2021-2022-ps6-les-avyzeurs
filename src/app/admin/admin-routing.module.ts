import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminIndexComponent} from "./index/admin-index.component";
import {AdminQuizzesComponent} from "./quizzes/admin-quizzes.component";
import {AdminProfilesComponent} from "./profiles/admin-profiles.component";
import {AdminQuizzesCreateComponent} from "./quizzes/create/admin-quizzes-create.component";

const routes: Routes = [
  {path: 'admin', pathMatch: 'full', component: AdminIndexComponent},
  {path: 'admin-quizzes', pathMatch: 'full', component: AdminQuizzesComponent},
  {path: 'admin-profiles', pathMatch: 'full', component: AdminProfilesComponent},
  {path: 'admin-quizzes-create', pathMatch: 'full', component: AdminQuizzesCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
