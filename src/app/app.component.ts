import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/commons/header/header.component';
import { InsertComponent } from './components/insert/insert/insert.component';
import { HomeComponent } from './components/home/home/home.component';
import { LangCustomServiceService } from './services/lingua/lang-custom-service.service';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [RouterOutlet,TranslateModule,HeaderComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'InternationalFeApp';
  
constructor(private linguaService:LangCustomServiceService){
  
}
ngOnInit(): void {
  this.linguaService.checkLang()
  
}

  
 

}
