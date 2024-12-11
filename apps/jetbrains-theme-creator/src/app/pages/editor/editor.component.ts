import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeEditorComponent } from '@jetbrains-theme-creator/theme-editor';
import { IdePreviewComponent } from '@jetbrains-theme-creator/ide-preview';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, ThemeEditorComponent, IdePreviewComponent],
  template: `
    <div class="flex h-screen bg-gray-100 flex-row">
      <div class="w-1/3 border-r border-gray-200 bg-white overflow-y-auto">
        <lib-theme-editor
                          [theme]="currentTheme"
                          (themeChange)="onThemeChange($event)"
                          (highlightSection)="onHighlightSection($event)">
        </lib-theme-editor>
      </div>

      <div class="w-2/3">
        <lib-ide-preview>
        </lib-ide-preview>
      </div>
    </div>
  `,
})
export class EditorComponent implements OnInit {
  currentTheme: any = {};
  highlightedSection: string | null = null;

  ngOnInit() {
    // Initialize with default theme
    this.currentTheme = {
      editor: {
        background: '#2b2b2b',
        foreground: '#a9b7c6',
        lineNumbers: '#606366',
        selection: '#214283',
      },
      syntax: {
        keywords: '#cc7832',
        strings: '#6a8759',
        numbers: '#6897bb',
        comments: '#808080',
        functions: '#ffc66d',
      }
    };
  }

  onThemeChange(theme: any) {
    this.currentTheme = theme;
  }

  onHighlightSection(section: string) {
    this.highlightedSection = section;
  }
}
