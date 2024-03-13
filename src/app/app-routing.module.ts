import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailedComponent } from './people/person-detailed/person-detailed.component';

const routes: Routes = [
  {path:"person/:id", component:PersonDetailedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
