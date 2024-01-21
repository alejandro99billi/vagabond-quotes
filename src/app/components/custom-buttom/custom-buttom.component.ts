import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-buttom',
  templateUrl: './custom-buttom.component.html',
  styleUrls: ['./custom-buttom.component.scss']
})
export class CustomButtomComponent {
  @Input() description: string = '';
  @Output() action = new EventEmitter<string>();
  performAction() {
    this.action.emit(); 
  }
}
