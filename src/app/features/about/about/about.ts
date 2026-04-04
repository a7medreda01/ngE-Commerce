import { Component } from '@angular/core';
import { Sales } from '../sales/sales';
import { Services } from '../../home/components/services/services';

@Component({
  selector: 'app-about',
  imports: [Sales,Services],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
