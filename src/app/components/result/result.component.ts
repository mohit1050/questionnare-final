import { Component, OnInit } from '@angular/core';
import { QuestionserviceService } from 'src/app/services/questionservice.service';
import { UserresponseService } from 'src/app/services/userresponse.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  constructor(
    private ser: UserresponseService,
    private ques: QuestionserviceService
  ) {}

  result: any = 0;

  ngOnInit(): void {
    this.getscore();
  }

  qlist: any[] = [];
  ans: any[] = [];
  userresp: any[] = [];
  last: any[] = [];
  getName() {
    return localStorage.getItem('name');
  }
  getscore() {
    this.ques.getQuestionJson().subscribe((data) => {
      //console.log(data);
      this.qlist.push(data);
      this.userresp = this.ser.getRes();
      for (let i = 0; i < this.qlist[0].length; i++) {
        this.ans.push(this.qlist[0][i].correct);
        this.last.push(this.userresp[i].response);
      }

      for (let i = 0; i < this.last.length; i++) {
        if (this.last[i] === this.ans[i]) {
          this.result += 10;
        }
      }
      console.log(this.result);

      console.log(this.ans);
      console.log(this.last);
    });
  }
}
