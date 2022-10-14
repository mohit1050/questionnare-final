import { Component, OnInit } from '@angular/core';
import { QuestionserviceService } from 'src/app/services/questionservice.service';
import { UserresponseService } from 'src/app/services/userresponse.service';

@Component({
  selector: 'app-questionform',
  templateUrl: './questionform.component.html',
  styleUrls: ['./questionform.component.css'],
})
export class QuestionformComponent implements OnInit {
  constructor(
    private questionser: QuestionserviceService,
    private res: UserresponseService
  ) {}

  currentquestion: number = 0;
  questionlist: any[] = [];
  prevflag = false;
  data: any = '';
  radiostatus: boolean = false;
  qlist: any[] = [];
  result: any = 0;
  ngOnInit(): void {
    this.getAllQuestions();
  }

  // this method collects all the details from api
  getAllQuestions() {
    this.questionser.getQuestionJson().subscribe((res) => {
      this.questionlist = res;
    });
    //console.log(this.questionlist)
  }

  //this is for proceeding to next question
  next() {
    //localStorage.setItem("res",JSON.stringify({"username":localStorage.getItem("name"),"id":this.currentquestion+1,"selected":this.data}))
    this.res.addRes({
      uemail: localStorage.getItem('uemail'),
      qid: this.currentquestion + 1,
      response: this.data,
    });

    console.log(this.data);

    this.currentquestion++;
    this.radiostatus = false;
    //this.calScore();
    if (this.questionlist.length === this.res.getRes().length) {
      this.res.submitRes();
      this.questionlist[this.currentquestion].c = 0;
    }
  }

  onchange(e: any) {
    // localStorage.setItem(
    //   'res',
    //   JSON.stringify({
    //     username: localStorage.getItem('name'),
    //     id: this.currentquestion + 1,
    //     selected: e.target.value,
    //   })
    // );
    this.data = e.target.value;

    //console.log(e.target.value);
  }

  //this is for geeting back to previous question
  previous() {
    this.currentquestion--;
  }

  // calScore() {
  //   if (this.currentquestion < this.questionlist.length) {
  //     if (this.data === this.qlist[this.currentquestion].answer) {
  //       this.result += 10;
  //       console.log(this.result);
  //     }
  //   }
  // }
  // loopThroughAnswer() {
  //   this.questionser.getQuestion().subscribe((data) => {
  //     this.qlist = data.questions;
  //   });
  // }
}
