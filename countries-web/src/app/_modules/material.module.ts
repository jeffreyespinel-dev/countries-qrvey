import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

const material_modules = [
  MatIconModule,
  MatDialogModule
]

@NgModule({
  declarations: [],
  imports: material_modules,
  exports: material_modules
})
export class MaterialModule { }