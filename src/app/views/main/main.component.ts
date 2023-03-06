import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export default class MainComponent {

  currentDate: any = dayjs().format('YYYY-MM-DD');

  concepts = ['Food', 'Tech', 'Public Services', 'Transportation', 'Other'];

  message: string = "Epa";

  form: any = {
    date: new FormControl(this.currentDate),
    income: new FormControl(false),
    concept: new FormControl("Food"),
    detail: new FormControl(""),
    amount: new FormControl(0)
  }
  constructor() {
    console.log('>>>', this.currentDate);
  }
}
