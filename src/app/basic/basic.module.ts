import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CharizardComponent } from './charizard/charizard.component';
import { FatherComponent } from './father/father.component';
import { FatherSonComponent } from './father-son/father-son.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CounterComponent,
    CharizardComponent,
    FatherComponent,
    FatherSonComponent
  ],
})
export class BasicModule { }
