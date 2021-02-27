import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message:string='';

  constructor(private _AuthService: AuthService , private _Router:Router) { }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[a-z A-Z 0-9]{8,}$')])
  });


  submitForm(loginForm:FormGroup):any{
    this._AuthService.login(loginForm.value).subscribe((res:any)=>{

      if(res.message === "success"){

        localStorage.setItem('token',res.token)
        this._AuthService.savecurrentUserData();
        this._Router.navigate(['/Home'])


      }
      else{
        this.message=res.message
      }
    })
  }
  toRegisterPage():any{
    this._Router.navigate(['/Register'])
  }
  ngOnInit(): void {
  }

}
