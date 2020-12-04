import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [CoreComponent],
  imports: [CommonModule, CoreRoutingModule, HttpClientModule],
})
export class CoreModule {}
