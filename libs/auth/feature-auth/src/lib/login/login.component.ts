import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'sra-login',
  templateUrl: './login.component.html',
  imports: [FormsModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  submit() {}
}
