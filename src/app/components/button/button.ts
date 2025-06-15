import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() name: string | undefined;
  @Input() acao: (() => void | undefined) | undefined;
  @Input() variant: 'primary' | 'secondary' = 'primary';
}
