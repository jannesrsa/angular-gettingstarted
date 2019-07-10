import { NgModule } from "@angular/core";
import { ConvertToSpacesPipe } from "./convert-to-spaces.pipe";
import { StarComponent } from "./star.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConvertToSpacesPipe,
    StarComponent
  ],
  exports: [
    StarComponent,
    ConvertToSpacesPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }