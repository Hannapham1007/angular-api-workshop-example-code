import { Component, Input } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-detailed',
  templateUrl: './person-detailed.component.html',
  styleUrl: './person-detailed.component.css'
})
export class PersonDetailedComponent {
  @Input('person') person: Person | null = null;


}
