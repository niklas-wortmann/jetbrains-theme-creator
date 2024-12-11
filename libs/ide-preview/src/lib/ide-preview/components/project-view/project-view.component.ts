import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-project-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="h-full bg-[#2b2d30]">
      <div class="p-2 text-sm">
        <div class="flex items-center space-x-2 mb-2">
          <span class="text-[#bababa]">Project</span>
        </div>
        <div class="tree-view">
          <div class="pl-4">
            <div class="flex items-center py-1">
              <span class="text-[#bababa]">📁 jetbrains-theme-creator</span>
            </div>
            <div class="pl-4">
              <div class="flex items-center py-1">
                <span class="text-[#bababa]">📁 apps</span>
              </div>
              <div class="flex items-center py-1">
                <span class="text-[#bababa]">📁 libs</span>
              </div>
              <div class="flex items-center py-1">
                <span class="text-[#bababa]">📄 package.json</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProjectViewComponent {}