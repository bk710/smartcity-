import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import{regForm}from '../models/RegisterForm';

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent implements OnInit {

  public registForm = new FormGroup({
    fN:new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z]+")]),
    sN:new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z]+")]),
    eA:new FormControl('',[Validators.required, Validators.email]),
    uN:new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z0-9]+"),Validators.maxLength(15)]),
    pD:new FormControl('',[Validators.required, ]),
   cpD:new FormControl('',[Validators.required, ]),
  
  })
  public finReg:any;
  public regFin(){
    console.log(this.finReg.value);
    this.finReg = this.registForm.value
   
  }
  constructor() { }

  ngOnInit(): void {
  }

}
