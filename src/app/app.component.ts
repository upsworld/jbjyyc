import { Component, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'main-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDragging = false;

  @HostListener('dragenter', ['$event ']) onDragenter(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log('dragenter');
    this.isDragging = true;
  }

  onDragleave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log('dragleave');
    this.isDragging = false;
  }
}
