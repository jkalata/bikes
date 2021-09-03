import { LoaderComponent } from './../../components/loader/loader.component';
import { materialModules } from './material.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, materialModules],
  exports: [materialModules, LoaderComponent],
})
export class SharedModule {}
