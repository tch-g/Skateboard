import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

export interface SignUpForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  SignUp({email, password}: SignUpForm){
    if(!email || !password){
      return
    }
  
    this.auth.SignUp({email, password}).then(()=>{
      this.router.navigate(['skate']);    
    })
  }

  ngOnInit(): void {
  }

}
