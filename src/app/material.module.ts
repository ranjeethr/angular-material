import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [MatSliderModule, MatButtonModule, MatDividerModule],
  exports: [MatSliderModule, MatButtonModule, MatDividerModule],
})
export class MaterialModule {}
