import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonItemComponent } from './person-item/person-item.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonDetailedComponent } from './person-detailed/person-detailed.component';



@NgModule({
  declarations: [PeopleListComponent, PersonItemComponent, PersonDetailedComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [PeopleListComponent],
})
export class PeopleModule {}
