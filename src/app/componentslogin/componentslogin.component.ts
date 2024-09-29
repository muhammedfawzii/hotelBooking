import { Component, inject } from '@angular/core';
import { REACTIVE_NODE } from '@angular/core/primitives/signals';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../core/login.service';

@Component({
  selector: 'app-componentslogin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './componentslogin.component.html',
  styleUrl: './componentslogin.component.scss'
})
export class ComponentsloginComponent {
private readonly _LoginService = inject(LoginService)
loginForm:FormGroup = new FormGroup({
  phone: new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  password: new FormControl(null , [Validators.required , Validators.pattern(/^\w{6,}$/)])
})
OnSubmit(){
  if(this.loginForm.valid){
    this._LoginService.login(this.loginForm.value).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }else{
    this.loginForm.markAllAsTouched()
  }
}
}
