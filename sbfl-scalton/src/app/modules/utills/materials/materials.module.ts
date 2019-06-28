import { NgModule } from '@angular/core';
import * as MATERIAL_MODULES from '@angular/material';

export function mapMaterialModules() {
  return Object.keys(MATERIAL_MODULES).filter((k) => {
    let asset = MATERIAL_MODULES[k];
    return typeof asset == 'function'
      && asset.name.startsWith('Mat')
      && asset.name.includes('Module');
  }).map((k) => MATERIAL_MODULES[k]);
}
const allModules = mapMaterialModules();

console.log(allModules);;
@NgModule({
  declarations: [],
  imports: allModules,
  exports: allModules
})
export class MaterialsModule { }
