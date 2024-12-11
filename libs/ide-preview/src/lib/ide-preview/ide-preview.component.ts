import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { EditorComponent } from './components/editor/editor.component';
import { GitToolWindowComponent } from './components/git-tool-window/git-tool-window.component';

@Component({
  selector: 'lib-ide-preview',
  standalone: true,
  imports: [
    CommonModule,
    TopBarComponent,
    ProjectViewComponent,
    EditorComponent,
    GitToolWindowComponent
  ],
  template: `
    <div class="ide-container bg-[#2b2d30] text-[#bababa] h-screen flex flex-col">
      <lib-top-bar />
      <div class="flex-1 flex">
        <lib-project-view class="w-72 border-r border-[#1e1f22]" />
        <lib-editor class="flex-1" />
        <lib-git-tool-window class="w-96 border-l border-[#1e1f22]" />
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class IdePreviewComponent {}