import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerIconComponent, provideTablerIcons } from 'angular-tabler-icons';

@Component({
  selector: 'lib-top-bar',
  standalone: true,
  imports: [CommonModule, TablerIconComponent],
  providers: [
    provideTablerIcons({

    }),
  ],
  template: `
    <div class="h-8 bg-[#3c3f41] flex items-center px-2 border-b border-[#1e1f22]">
      <div class="flex items-center space-x-2">
        <div class="flex space-x-1">
          <div class="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div class="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div class="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>
        <span class="text-xs text-[#bababa] ml-4">jetbrains-theme-creator</span>
      </div>
    </div>
  `
})
export class TopBarComponent {}
