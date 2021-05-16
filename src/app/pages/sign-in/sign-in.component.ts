import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { emailValidator, matchingPasswords } from '../../theme/utils/app-validators';
import {LoginServiceService} from './login-service.service'
import {User} from './userModel'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  getallusers : any
  constructor(public formBuilder: FormBuilder, public router:Router, public snackBar: MatSnackBar, private service : LoginServiceService) { }
usersList = []
user : User
isLoginSubject

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, emailValidator])),
      password : new FormControl ('', Validators.compose([Validators.required, Validators.minLength(6)])), 
    });

    this.registerForm = new FormGroup({
      name: new FormControl ('', Validators.compose([Validators.required, Validators.minLength(3)])),
      email: new FormControl ('', Validators.compose([Validators.required, emailValidator])),
      password: new FormControl ('', Validators.required),
      confirmPassword: new FormControl ('', Validators.required)
    })
  }


  

  public onLoginFormSubmit():void {  
    
    
      this.service.login(this.loginForm.value).subscribe(res =>{
        console.log(this.user);
        this.user = res.user
        // console.log(this.user);
        // console.log(res.user);
        
        if(!this.user){

          
          this.snackBar.open('Please signUp and try again!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
        }
        else if(this.user.email == 'nasserimen102@gmail.com'){
          localStorage.setItem('AdminEmail',this.loginForm.value.email)
          localStorage.setItem('token',res.token)
          localStorage.setItem("user",JSON.stringify(res.user))
          this.service.isLoginSubject.next(true)
        }
        else{
          localStorage.setItem('email',this.loginForm.value.email)
          localStorage.setItem('token',res.token)
          this.service.isLoginSubject.next(true)
          localStorage.setItem("user",JSON.stringify(res.user))
          this.router.navigate(['/']);
        }
      } , err=>{console.log(err) , ()=>{;
      };
      })
  }

  public onRegisterFormSubmit(user):void {
    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword){
      this.snackBar.open('Confirm your password!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    }
    else if (this.registerForm.valid) {
      this.service.register(this.registerForm.value).subscribe(user => {} , err =>{console.log(err);
      } , ()=>(console.log(user)
      ))
      this.snackBar.open('You registered successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    }
  }

}
