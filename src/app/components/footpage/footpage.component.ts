import { Component } from '@angular/core';
import { DEPLOY_URL } from 'src/constants';



@Component({
  selector: 'app-footpage',
  templateUrl: './footpage.component.html',
  styleUrls: ['./footpage.component.scss']
})
export class FootpageComponent {
  deployUrl = DEPLOY_URL;
}
