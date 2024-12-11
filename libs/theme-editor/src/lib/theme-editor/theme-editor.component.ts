import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-theme-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-6">Theme Editor</h2>
      
      <div class="space-y-6">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Editor</h3>
          
          <div class="space-y-2">
            <div class="flex items-center">
              <label class="w-32">Background</label>
              <input type="color" [ngModel]="theme.editor.background"
                (ngModelChange)="updateTheme('editor.background', $event)"
                (focus)="highlightSection.emit('editor.background')"
                class="w-full">
            </div>
            
            <div class="flex items-center">
              <label class="w-32">Foreground</label>
              <input type="color" [ngModel]="theme.editor.foreground"
                (ngModelChange)="updateTheme('editor.foreground', $event)"
                (focus)="highlightSection.emit('editor.foreground')"
                class="w-full">
            </div>
            
            <div class="flex items-center">
              <label class="w-32">Line Numbers</label>
              <input type="color" [ngModel]="theme.editor.lineNumbers"
                (ngModelChange)="updateTheme('editor.lineNumbers', $event)"
                (focus)="highlightSection.emit('editor.lineNumbers')"
                class="w-full">
            </div>
            
            <div class="flex items-center">
              <label class="w-32">Selection</label>
              <input type="color" [ngModel]="theme.editor.selection"
                (ngModelChange)="updateTheme('editor.selection', $event)"
                (focus)="highlightSection.emit('editor.selection')"
                class="w-full">
            </div>
          </div>
        </div>
        
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Syntax</h3>
          
          <div class="space-y-2">
            <div class="flex items-center">
              <label class="w-32">Keywords</label>
              <input type="color" [ngModel]="theme.syntax.keywords"
                (ngModelChange)="updateTheme('syntax.keywords', $event)"
                (focus)="highlightSection.emit('syntax.keywords')"
                class="w-full">
            </div>
            
            <div class="flex items-center">
              <label class="w-32">Strings</label>
              <input type="color" [ngModel]="theme.syntax.strings"
                (ngModelChange)="updateTheme('syntax.strings', $event)"
                (focus)="highlightSection.emit('syntax.strings')"
                class="w-full">
            </div>
            
            <div class="flex items-center">
              <label class="w-32">Numbers</label>
              <input type="color" [ngModel]="theme.syntax.numbers"
                (ngModelChange)="updateTheme('syntax.numbers', $event)"
                (focus)="highlightSection.emit('syntax.numbers')"
                class="w-full">
            </div>
            
            <div class="flex items-center">
              <label class="w-32">Comments</label>
              <input type="color" [ngModel]="theme.syntax.comments"
                (ngModelChange)="updateTheme('syntax.comments', $event)"
                (focus)="highlightSection.emit('syntax.comments')"
                class="w-full">
            </div>
            
            <div class="flex items-center">
              <label class="w-32">Functions</label>
              <input type="color" [ngModel]="theme.syntax.functions"
                (ngModelChange)="updateTheme('syntax.functions', $event)"
                (focus)="highlightSection.emit('syntax.functions')"
                class="w-full">
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ThemeEditorComponent {
  @Input() theme: any;
  @Output() themeChange = new EventEmitter<any>();
  @Output() highlightSection = new EventEmitter<string>();

  updateTheme(path: string, value: string) {
    const newTheme = { ...this.theme };
    const parts = path.split('.');
    let current: any = newTheme;
    
    for (let i = 0; i < parts.length - 1; i++) {
      current = current[parts[i]];
    }
    
    current[parts[parts.length - 1]] = value;
    this.themeChange.emit(newTheme);
  }
}