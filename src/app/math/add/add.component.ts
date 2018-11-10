import { Component, OnInit, ElementRef } from '@angular/core';
import { FormsModule,FormGroup,FormBuilder,Validator,ReactiveFormsModule ,FormControl } from '@angular/forms';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { MatDialog, MatDialogConfig} from "@angular/material";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  firstNum :number;
  secondNum:number;
  sum  :String;
  min :number;
  max :number;
  tempFisrtNum :number ;
  temSecondNum :number;
  addForm :FormGroup;
  numberMxRange =[10,100,1000,1000];
   disp_num1 :String;
   disp_num2 :String;
  constructor(private dialog: MatDialog) {

    this.addForm =this.createFormGroup();

   }

   openDialog(msg) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = msg;
    let dialogRef = this.dialog.open(DialogBodyComponent, dialogConfig);
  }


  ngOnInit() {
        this.firstNum=12;
        this.secondNum=23;
        this.disp_num1="1 2";
        this.disp_num2="2 3"        
      }


  createFormGroup() {
    return new FormGroup({
      firstNum: new FormControl(),
      secondNum: new FormControl(),
      sum: new FormControl() ,      
      max :new FormControl (100) ,
      disp_num1:new FormControl (),
      disp_num2:new FormControl ()
    });
  }

  generateRanadomNumber (){
   
     
    do {

      this.tempFisrtNum = Math.floor(Math.random() * this.addForm.value.max );    
      this.temSecondNum = Math.floor(Math.random() * this.addForm.value.max ); 
     
    }
    while ( this.tempFisrtNum<=this.temSecondNum);

    this.firstNum =this.tempFisrtNum;
    this.secondNum =this.temSecondNum;
    this.disp_num1= this.separateDigits_num( this.firstNum);
    this.disp_num2 =this.separateDigits_num( this.secondNum);
 

  }



  separateDigits_num (number){
       
        var sNumber = number.toString();
        var retnum ="" ;
            for (var i = 0, len = sNumber.length; i < len; i += 1) {
          retnum+=+sNumber.charAt(i)+"    ";
        }
              return retnum;  
   }

   onChange(deviceValue) {
     alert(deviceValue)
    console.log(deviceValue);
    this.max=deviceValue;
    this.generateRanadomNumber();
}

  addNumber(addForm){
      
   // alert("first num ->"+this.firstNum)
   // alert ("second num -"+this.secondNum)
   // alert("sum file ->"+this.addForm.value.sum)
   var  total =this.firstNum+this.secondNum;
   // alert ("total -"+total)
      
   if (parseInt(this.addForm.value.sum) ==total){
    this.playAudio("22006348_well-done_4.mp3");
   alert("correct answer")
   //this.openDialog("correct answer");

   }
   else {
    this.playAudio("7528479_wrong-answer_2.mp3");
   alert("wrong answer")
   //this.openDialog("wrong answer");
     }

     this.addForm.value.sum ='';
     this.sum='';
   
  // this.playAudio();
   this.generateRanadomNumber();
   //alert(this.sum)
   this.openDialog(this.sum);
 
  }

  playAudio(voice){
    let audio = new Audio();
    audio.src = "../../../assets/"+voice;
    audio.load();
    audio.play();
    }

}
