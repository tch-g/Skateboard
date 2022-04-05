import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

export interface SignInForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  SignIn({email, password}: SignInForm){
    if(!email || !password){
      return
    }
   this.auth.SignIn({ email, password }).then(()=>{
     this.router.navigate(['skate'])
   })
   }

  ngOnInit(): void {
  }

}
