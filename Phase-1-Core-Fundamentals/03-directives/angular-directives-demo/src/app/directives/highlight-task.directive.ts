import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightTask]'
})
export class HighlightTaskDirective {
  @Input('appHighlightTask') priority: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setInitialHighlight();
  }

  private setInitialHighlight() {
    if (this.priority === 'High') {
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '5px solid red');
    } else if (this.priority === 'Medium') {
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '5px solid orange');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '5px solid green');
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#f1f1f1');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}
