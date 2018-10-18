import { Directive, Renderer2 , OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor:string = 'black';
  constructor(private elRef: ElementRef,private renderer: Renderer2) {
   
  }
   ngOnInit(){
//     this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
   }
   @HostListener('mouseenter') mounseover (eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'grey';
  }
   @HostListener('mouseleave') mounseleave (eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');
    this.backgroundColor= 'yellow';
   }
}
