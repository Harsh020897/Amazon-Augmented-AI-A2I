import {Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'ng-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class Home implements OnInit {

  data; // Key value pairs
  dataSource = new MatTableDataSource();
  displayedColumns = ['field', 'value', 'confidence' ]; // Mat table column ids

  // Image viewer default configurations
  config = {
    btnClass: 'default', // The CSS class(es) that will apply to the buttons
    zoomFactor: 0.1, // The amount that the scale will be increased by
    containerBackgroundColor: '#fff', // The color to use for the background. This can provided in hex, or rgb(a).
    wheelZoom: false, // If true, the mouse wheel can be used to zoom in
    allowFullscreen: true, // If true, the fullscreen button will be shown, allowing the user to entr fullscreen mode
    allowKeyboardNavigation: true, // If true, the left / right arrow keys can be used for navigation
    btnIcons: { // The icon classes that will apply to the buttons. By default, font-awesome is used.
      zoomIn: 'fa fa-plus',
      zoomOut: 'fa fa-minus',
      rotateClockwise: 'fa fa-repeat',
      rotateCounterClockwise: 'fa fa-undo',
      next: 'fa fa-arrow-right',
      prev: 'fa fa-arrow-left',
      fullscreen: 'fa fa-arrows-alt',
    },
    btnShow: {
      zoomIn: true,
      zoomOut: true,
      rotateClockwise: true,
      rotateCounterClockwise: true,
      next: true,
      prev: true
    }
  };
  images = []; // Array of image paths
  fileData; // Object containing details about the file like file name
  fileName; // File Name

  constructor(private eltRef: ElementRef, private cdr: ChangeDetectorRef) {
    // Get all attributes passed to this component from the DOM
    this.data = JSON.parse(eltRef.nativeElement.getAttribute('keys'));
    this.images = JSON.parse(eltRef.nativeElement.getAttribute('images'));
    this.fileData = JSON.parse(eltRef.nativeElement.getAttribute('file'));
    this.fileName = this.fileData['file_name'];
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit() {}
}
