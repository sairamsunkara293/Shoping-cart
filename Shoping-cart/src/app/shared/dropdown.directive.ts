import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: "[appDropdown]",
  exportAs: 'appDropDown'
})
export class DropdownDirective {
  constructor(private elRef: ElementRef) { }
  @HostBinding('class.show') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    // If you want that a dropdown can also be closed by a click anywhere outside
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}
