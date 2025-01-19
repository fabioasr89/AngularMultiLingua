import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LangCustomServiceService } from '../../../services/lingua/lang-custom-service.service';

@Component({
  standalone:true,
  selector: 'app-header',
  imports: [TranslateModule,RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
 linguaCorrente:string
 linguaggi:any=[]

  constructor(private linguaService:LangCustomServiceService){
   
  }
  ngOnInit(): void {
    this.linguaggi=[{id:"it",label:"IT"},{id:"de",label:"DE"}]
    console.log('Header component creato. Linguaggi size:'+this.linguaggi.length)
    if(this.linguaService.isLangSelected()){
      console.log('Lingua presente nella storage')
      this.linguaCorrente=this.linguaService.getLangFromStorage()
    }
  }

  

  public cambiaLinguaggio(lingua:string):void{
    console.log('cambiamento linguaggio in corso..')
    this.linguaService.setLanguage(lingua)
    console.log('linguaggio cambiato:'+lingua)
    this.linguaCorrente=lingua
  }
}
