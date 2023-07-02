import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'sra-register',
  templateUrl: './register.component.html',
  imports: [RouterModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  submit() {}
}
