import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-index-medium',
  templateUrl: './index-medium.component.html',
  styleUrls: ['./index-medium.component.css']
})
export class IndexMediumComponent implements OnInit {
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
  R  : number [] = [1 , 3 , 3 , 3 , 2 , 1, 2 , 2 ,2 ,1];

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




  
 controll(el : HTMLElement){  
    this.V = [this.selectedNumber1, this.selectedNumber2 , this.selectedNumber3 , this.selectedNumber4, this.selectedNumber5 , this.selectedNumber6 , this.selectedNumber7, this.selectedNumber8 , this.selectedNumber9 , this.selectedNumber10];
    
    this.Corretta =[ "A. 8 bit", 
    "C. 32 bit" , 
    "C. null",
    "C. Si riferisce alla capacit\u00E0; di creare una classe astratta secondo il paradigma OOP." ,
    "B. Le classi dichiarate final non possono essere estese da un'altra classe.", 
    "A. il polimorfismo runtime \u00E8 un processo per cui i metodi overridden vengono risolti a runtime e non a compile-time",
    "B. Essere implementata da una classe.", 
    "B. Dichiarare sia metodi astratti che concreti.",
    "B. Estendere una classe astratta e implementare pi\u00F9 interfacce.",
    "A. Fornisce il meccanismo per convertire una variabile di tipo primitivo in un oggetto e un oggetto in una variabile di tipo primitivo."];
    this.isDisabled =   true;
    
    for(  this.i = 0 ; this.i < this.V.length ; this.i++){
     
      if(this.V[this.i] == this.R[this.i]){
        this.c++;
       
       this.Selector[this.i] = false; 
        
    }else{
       
      this.Selector[this.i] = true;
      
      //$("#right1").addClass("wrapperErr"); 
     
    };
    
  }
   
  this.stampaResult = true;
  this.nDom = this.V.length;


 
  /*
  for( let i   =0 ; i < this.V.length ; i++){
    if(this.V[i] == this.R[i]){
      console.log(this.V[i]);
      this.c= this.c +1;
      
      
  }else{
      
     
      
  }
   }

   console.log(this.c);  */
    
   el.scrollIntoView();
  }

 check(){
  
   
    //contatore risposte corrette
    var c=0;     
    //Prendiamo il valore di ogni domanda tramite il name
  
    
     
    /*
    var q2= document.questionario.domanda2.value;
    var q3 = document.questionario.domanda3.value;
    var q4= document.questionario.domanda4.value;
    var q5= document.questionario.domanda5.value;
    var q6= document.questionario.domanda6.value;
    var q7= document.questionario.domanda7.value;
    var q8= document.questionario.domanda8.value;
    var q9= document.questionario.domanda9.value;
    var q10= document.questionario.domanda10.value;
     
    var result = document.getElementById("result");
    var nDom = document.getElementById("nDom");
    //Vettore risposte inserite manualmente tramite la checkBox
    var Q= [q1 , q2 , q3 , q4 , q5, q6, q7, q8, q9, q10];
    //Vettore risposte corrette
    var R = [3 , 1 , 2 , 2 , 1 , 3 , 1 , 1 ,1 ,3];
    //Vettore contenente Gli id dei Paragrafi su cui far apparire il Div Red nel momento in cui si sbaglia una risposta
    var right = ['right1' , 'right2', 'right3' , 'right4', 'right5', 'right6', 'right7', 'right8', 'right9', 'right10']
    //Vettore contenente le risposte corrette , stampate a video nel momento in cui si presenta un errore
    var Corretta =["C. java prova.class", "A. Stampa a video l'argomento su una riga senza poi andare a compilarlo" , "B. Permette di definire una classe derivata"
                   ,"B. Si , il predefinito" ,"A.  Non si pu\xF2 fare nulla", "C. Automatica","A. la classe base di Java" , "A.  Si usa la parola chiave void",
                   "A.  Dal metodo main della classe indicata nel nome del file .class" ,"C. class Employee extends Person implements Comparable"]
   
    //Controlla la correttezza delle risposte inserite comparandole con le risposte esatte   
     for(var i = 0; i< Q.length; i++){
      if(Q[i] == R[i]){
          
            c++;
            
            
        }else{
            document.getElementById(right[i]).className="wrapperErr";
            document.getElementById(right[i]).innerHTML = "La risposta corretta \u00E8 la " + Corretta[i];
            
        }
    }
   
    //Stampa del risultato in modo dinamico in base a ===> DomandeCorrette / DomandeTotali
    document.getElementById("result").innerHTML = result.textContent = c;
    document.getElementById("nDom").innerHTML = nDom.textContent = Q.length;
    console.log()
    // Disabilita tutte le checkbox nel momento in cui si preme invio
    
   
    document.getElementById("button").disabled = true;
   //visualizzare la tabella
   
     //   document.getElementById("mostra").style.display = "none";
        
   */
}
   

}


