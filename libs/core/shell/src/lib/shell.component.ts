import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  standalone: true,
  imports: [RouterModule, FooterComponent, NavbarComponent],
  selector: 'sra-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {}
