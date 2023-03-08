import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import * as dayjs from 'dayjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export default class MainComponent {

  currentDate: any = dayjs().format('YYYY-MM-DD');

  concepts = ['Apartment', 'Dreamland', 'Emergencies Fund', 'Entertainment', 'Food', 'Tech', 'Travel', 'Public Services', 'Wage', 'Tithe', 'Health', 'Church', 'Home', 'Mobile', 'Gift', 'Pet', 'Internet', 'Cleaning', 'Transportation', 'Other'];

  message: string = "";

  form: any = {
    date: new FormControl(this.currentDate),
    income: new FormControl(false),
    concept: new FormControl("Food"),
    detail: new FormControl(""),
    amount: new FormControl(0)
  }
  constructor(private authService: AuthService) { }

  submit() {
    this.message = "Cargando..."
    const formattedDate = dayjs(this.form.date.value).format('M/D/YYYY');
    this.authService.postRecord({
      "values": [
        [
          formattedDate,
          +this.form.date.value.split('-')[1],
          this.form.income.value ? 'Income' : 'Outcome',
          this.form.concept.value,
          this.form.detail.value,
          '',
          this.form.amount.value
        ]
      ]
    }).subscribe({
      next: () => {
        this.message = "Registro cargado correctamente";
      },
      error: (err) => {
        this.message = "Ocurrió un error";
        console.error('Error', err);
      }
    })
  }

  signIn() {
    this.authService.auth();
  }
}
