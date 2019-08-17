import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarpaSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [CarpaSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [CarpaSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarpaSharedModule {
  static forRoot() {
    return {
      ngModule: CarpaSharedModule
    };
  }
}
