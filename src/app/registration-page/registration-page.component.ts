import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  public registerForm=new FormGroup({
    fN:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("[a-zA-Z]+")]),
    sN:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]+")]),
    eA:new FormControl('',[Validators.required,Validators.email]),
    uN:new FormControl('',[Validators.required,Validators.pattern("[a-zA-z0-9]+"),Validators.maxLength(15)]),
    pD:new FormControl('',[Validators.required,Validators.pattern( "^[a-zA-Z0-9"),Validators.minLength(10)]),
    cpD:new FormControl('',[Validators.required])

  })
  
  
  constructor() { 
    }

  ngOnInit(): void {
  }

}
