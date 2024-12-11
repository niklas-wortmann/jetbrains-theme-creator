import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-git-tool-window',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="h-full bg-[#2b2d30] flex flex-col">
      <div class="h-9 bg-[#3c3f41] flex items-center px-4 border-b border-[#1e1f22]">
        <span class="text-sm">Git</span>
      </div>
      <div class="flex-1 p-4">
        <div class="text-sm">
          <div class="mb-4">
            <div class="flex items-center space-x-2">
              <span class="text-[#bababa]">HEAD (Current Branch)</span>
            </div>
            <div class="pl-4 mt-2">
              <div class="flex items-center space-x-2">
                <span class="text-[#bababa]">🔵 main</span>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center space-x-2">
              <span class="text-[#bababa]">Remote</span>
            </div>
            <div class="pl-4 mt-2">
              <div class="flex items-center space-x-2">
                <span class="text-[#bababa]">📁 origin</span>
              </div>
              <div class="pl-4">
                <div class="flex items-center space-x-2">
                  <span class="text-[#bababa]">⭐ main</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class GitToolWindowComponent {}