import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: 'button[appClickWithWarning],input[appClickWithWarning]'
})
export class ClickWithWarningDirective implements OnInit {

  @HostBinding('class')
  class = 'btn btn-danger';

  @Input() message = 'Are you sure?';
  @Output() appClickWithWarning = new EventEmitter();

  constructor(private host: ElementRef) { }

  ngOnInit(): void {
    //this.host.nativeElement.setAttribute('class', 'btn btn-danger');
    this.host.nativeElement.focus();
  }

  @HostListener('click', ['$event'])
  click(e: MouseEvent): void {
    if (e.shiftKey || confirm(this.message)) {
      this.appClickWithWarning.emit();
    }
  }


}
