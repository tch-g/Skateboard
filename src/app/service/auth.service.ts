import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { SignInForm } from '../auth/sign-in/sign-in.component';
import { SignUpForm } from '../auth/sign-up/sign-up.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: any;

  currentUser: any;

  email:any;
  password:any;

  get isLoggedIn(): boolean{
    return !!this._user;
  }

  get userId(): any {
    return this._user.uid
  }
  
  get userEmail(): any {
    return this._user.email
  }

  constructor(private auth: AngularFireAuth, private router: Router, private store: AngularFirestore) { 
   this.auth.onAuthStateChanged((user:any)=>{
     this._user = user;
   })
  }



  SignIn({email, password}: SignInForm){
   return this.auth.signInWithEmailAndPassword(email, password)
   }

    SignUp({email, password}: SignUpForm){
    return this.auth.createUserWithEmailAndPassword(email, password)
  }


  SignOut(){
    return this.auth.signOut();
  }

}