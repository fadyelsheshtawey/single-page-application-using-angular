import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  message:string='';

  constructor(private _AuthService: AuthService, private _Router:Router) { }

  registerForm: FormGroup = new FormGroup({

    first_name:new FormControl(null, [Validators.required, Validators.maxLength(15),Validators.minLength(4),Validators.pattern('[a-zA-Z ]*')]),
	  last_name:new FormControl(null, [Validators.required, Validators.maxLength(15),Validators.minLength(4)]),
    age:new FormControl(null,[Validators.required,Validators.max(90),Validators.min(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[a-z A-Z 0-9]{8,}$')])
  });


  submitForm(registerForm:FormGroup):any{
    console.log(registerForm)
    this._AuthService.register(registerForm.value).subscribe((resp:any)=>{

      if(resp.message ==="success"){

        this._Router.navigate(['/Login'])
        
      }
      else{
        this.message=resp.errors.email.message
      }
    })
  }

  ngOnInit(): void {
  }

}
