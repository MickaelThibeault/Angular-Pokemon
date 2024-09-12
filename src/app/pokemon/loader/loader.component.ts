import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  template: `
    <div class="flex justify-center items-center">
      <div class="mt-3 w-14 h-14 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  `,
  styles: ``
})
export class LoaderComponent {

}
