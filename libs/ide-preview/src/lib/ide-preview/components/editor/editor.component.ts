import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { createHighlighter } from 'shiki/bundle/web'
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {darkTheme} from "jetbrains-ide-themes"


@Component({
  selector: 'lib-editor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="h-full bg-[#2b2d30] flex flex-col">
      <div class="tabs flex h-9 bg-[#3c3f41] border-b border-[#1e1f22]">
        <div class="tab px-4 py-2 text-sm flex items-center space-x-2 bg-[#2b2d30] border-r border-[#1e1f22]">
          <span>jest.config.ts</span>
        </div>
      </div>
      <div class="flex-1 overflow-auto p-4">
        <div [innerHTML]="highlightedCode" class="font-mono text-sm"></div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class EditorComponent implements OnInit {
  highlightedCode: SafeHtml = '';

  private sanitizer = inject(DomSanitizer)

  async ngOnInit() {
    const highlighter = await createHighlighter({
      langs: ["angular-ts", "ts", "js"],
      themes: [darkTheme],
    });

    const code = `export default {
  displayName: 'jetbrains-theme-creator',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  coverageDirectory: '../../coverage/apps/jetbrains-theme-creator',
  transform: {
    '^.+\\\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};`;

    this.highlightedCode = this.sanitizer.bypassSecurityTrustHtml(highlighter.codeToHtml(code, { lang: 'ts', theme: "Jetbrains Dark Theme" }));
  }
}
