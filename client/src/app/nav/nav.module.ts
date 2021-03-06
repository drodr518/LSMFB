import { NavRoutingModule } from './nav-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import {MatToolbarModule, MatButtonModule, MatMenuModule} from '@angular/material';

@NgModule({
  declarations: [NavbarComponent, MainComponent],
  imports: [
    CommonModule,
    NavRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class NavModule { }
