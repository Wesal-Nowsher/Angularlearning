import { Directive, 
  Renderer2 , 
  OnInit, 
  ElementRef, 
  HostListener, 
  HostBinding, 
  Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string= 'black';
  @Input('appBetterHighlight') highlighting: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor:string;
  constructor(private elRef: ElementRef,private renderer: Renderer2) {

  }
   ngOnInit(){
    this.backgroundColor= this.defaultColor;
    //     this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
   }
   @HostListener('mouseenter') mounseover (eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlighting;
  }
   @HostListener('mouseleave') mounseleave (eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');
    this.backgroundColor= this.defaultColor;
   }
}
