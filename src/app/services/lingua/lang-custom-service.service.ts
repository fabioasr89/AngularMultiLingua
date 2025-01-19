import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LangCustomServiceService {

  constructor(private translate: TranslateService) {
    // Impostazioni iniziali (puoi modificarle come necessario)
    let linguaUsata='it'
    this.translate.addLangs(['it','de'])
    this.translate.setDefaultLang('it'); 
    if(typeof window !== 'undefined' && typeof sessionStorage !== 'undefined'){
      const langInSession=sessionStorage.getItem('lingua')
      linguaUsata=(langInSession)?langInSession:linguaUsata
      this.translate.use(linguaUsata)
    }else{
     
      this.translate.use('it');  // Impostazione della lingua attuale
    }
    
  }

  getLangFromStorage():string{
    if(typeof window !== 'undefined' && typeof sessionStorage !== 'undefined'){
      return sessionStorage.getItem('lingua')!
    }
    return ''
  }

  isLangSelected():boolean{
    if(typeof window !== 'undefined' && typeof sessionStorage !== 'undefined'){
      return sessionStorage.getItem('lingua')!=null && sessionStorage.getItem('lingua')!=''
    }
    return false
  }

  checkLang():void{
    if(typeof window !== 'undefined' && typeof sessionStorage !== 'undefined'){
      let linguaUsata=sessionStorage.getItem('lingua')
      if(linguaUsata){
        console.log('Lingua usata:'+linguaUsata)
        this.setLanguage(linguaUsata)
      }
    }else{
      console.log('Session storage non definito nel contesto')
      this.translate.use('it');
    }
  }

  setLanguage(language: string): void {
    this.translate.use(language);
    console.log('Salvataggio nello storage della lingua:'+language)
    sessionStorage.setItem('lingua',language)
  }

  // Metodo per ottenere una traduzione
  getTranslation(key: string): string {
    let translation: string = '';
    this.translate.get(key).subscribe((translationValue: string) => {
      translation = translationValue;
    });
    return translation;
  }

}
