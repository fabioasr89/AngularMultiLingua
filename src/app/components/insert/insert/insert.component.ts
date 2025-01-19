import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LangCustomServiceService } from '../../../services/lingua/lang-custom-service.service';

@Component({
  standalone:true,
  selector: 'app-insert',
  imports: [TranslateModule],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent implements OnInit{
  
  constructor(private linguaService:LangCustomServiceService){}
  
  ngOnInit(): void {
    
  }

  

}
