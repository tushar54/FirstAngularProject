import { Component, input } from '@angular/core';

@Component({
  selector: 'app-testing',
  imports: [],
  templateUrl: './testing.html',
  styleUrl: './testing.css'
})
export class Testing {
   occupation = input<string>();
}
