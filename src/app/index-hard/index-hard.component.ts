import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-index-hard',
  templateUrl: './index-hard.component.html',
  styleUrls: ['./index-hard.component.css']
})
export class IndexHardComponent implements OnInit {
  selectedNumber1 !: number;
  selectedNumber2 !: number;
  selectedNumber3 !: number;
  selectedNumber4 !: number;
  selectedNumber5 !: number;
  selectedNumber6 !: number;
  selectedNumber7 !: number;
  selectedNumber8 !: number;
  selectedNumber9 !: number;
  selectedNumber10 !: number;

 element !: HTMLElement;

  V : number[] = [];
  R  : number [] = [3, 1 , 2, 2 , 1 , 3 , 1 , 1 ,1 ,3];

  Selector : boolean [] = [] ;
  isDisabled : boolean = false;
  stampaResult !: boolean;

  i !: number;
  Corretta : string[]  =[];
 


  c : number = 0;
  nDom : number = 0;


     constructor() { }

  ngOnInit() {
    
  }



  radioChangedHandler ( event : any ){
    this.selectedNumber1 = event.target.value;
  }

  radioChangedHandler2 ( event : any ){   
    this.selectedNumber2 = event.target.value;
  }
  radioChangedHandler3 ( event : any ){
    
    this.selectedNumber3 = event.target.value;
  }
  radioChangedHandler4 ( event : any ){
    this.selectedNumber4 = event.target.value;
  }

  radioChangedHandler5 ( event : any ){   
    this.selectedNumber5 = event.target.value;
  }
  radioChangedHandler6 ( event : any ){
    
    this.selectedNumber6 = event.target.value;
  }
  radioChangedHandler7 ( event : any ){
    this.selectedNumber7 = event.target.value;
  }

  radioChangedHandler8 ( event : any ){   
    this.selectedNumber8 = event.target.value;
  }
  radioChangedHandler9 ( event : any ){
    
    this.selectedNumber9 = event.target.value;
  }
  radioChangedHandler10 ( event : any ){
    this.selectedNumber10 = event.target.value;
  }




  
 controll( el: HTMLElement){  
    this.V = [this.selectedNumber1, this.selectedNumber2 , this.selectedNumber3 , this.selectedNumber4, this.selectedNumber5 , this.selectedNumber6 , this.selectedNumber7, this.selectedNumber8 , this.selectedNumber9 , this.selectedNumber10];
    
    this.Corretta =["  C. java prova.class", "A. Stampa a video l'argomento su una riga senza poi andare a compilarlo" , 
              "B. Permette di definire una classe derivata","B. Si , il predefinito" ,"A.  Non si pu\xF2 fare nulla", "C. Automatica","A. la classe base di Java" , "A.  Si usa la parola chiave void",
              "A.  Dal metodo main della classe indicata nel nome del file .class" ,"C. class Employee extends Person implements Comparable"];
    this.isDisabled =   true;
    
    for(  this.i = 0 ; this.i < this.V.length ; this.i++){
     
      if(this.V[this.i] == this.R[this.i]){
        this.c++;
       
       this.Selector[this.i] = false; 
        
    }else{
       
      this.Selector[this.i] = true;
      
     
    };
    
  }
   
  this.stampaResult = true;
  this.nDom = this.V.length;

  el.scrollIntoView();  
 
}

   

}


