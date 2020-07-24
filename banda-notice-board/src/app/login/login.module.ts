import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, AuthModule],
  exports: [LoginComponent],
})
export class LoginModule {}
