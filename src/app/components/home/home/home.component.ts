import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LangCustomServiceService } from '../../../services/lingua/lang-custom-service.service';

@Component({
  standalone:true,
  selector: 'app-home',
  imports: [TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private linguaService:LangCustomServiceService){}
 
  ngOnInit(): void {
   this.checkSession()
  }

  checkSession():void{
    
  }
}
