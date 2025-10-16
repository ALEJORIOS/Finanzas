import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import dayjs from 'dayjs';
import { ConnectionService } from 'src/app/services/connection.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class MainComponent {
  currentDate: any = dayjs().format('YYYY-MM-DD');

  concepts = [
    'Admin Apt',
    'Apartment',
    'Beauty',
    'Church',
    'Classes',
    'Cleaning',
    'Clothes',
    'Clothing',
    'Dreamland',
    'Education',
    'Emergencies Fund',
    'Entertainment',
    'Family',
    'Food',
    'Gift',
    'Health',
    'Home',
    'Lease',
    'Mobile',
    'Other',
    'Pet',
    'Public Services',
    'Restaurants',
    'Taxes',
    'Tech',
    'Tithe',
    'Transportation',
    'Travel',
    'Wage',
  ];

  message: string = '';

  form = {
    date: new FormControl<string>(this.currentDate),
    concept: new FormControl(false),
    category: new FormControl<string>('Food'),
    description: new FormControl<string>(''),
    value: new FormControl<number | null>(null),
  };

  constructor(private connection: ConnectionService) {
    console.log('>>>', this.currentDate);
  }

  cleanMessage() {
    this.message = '';
  }

  cleanForm() {
    this.form.date.setValue(this.currentDate);
    this.form.concept.setValue(false);
    this.form.category.setValue('Food');
    this.form.description.setValue('');
    this.form.value.setValue(null);
  }

  submit() {
    this.message = 'Cargando...';
    const formattedDate = dayjs(this.form.date.value).format('YYYY-MM-DD');
    this.connection
      .submitMovement({
        date: formattedDate,
        concept: this.form.concept.value === true ? 'income' : 'outcome',
        category: this.form.category.value || '',
        description: this.form.description.value || '',
        value: this.form.value.value || 0,
      })
      // .pipe(finalize(() => this.message = ''))
      .subscribe({
        next: () => {
          this.message = 'Movimiento subido';
          setTimeout(() => {
            this.cleanMessage();
            this.cleanForm();
          }, 1000);
        },
        error: () => {
          this.message = 'Error subiendo movimiento';
        },
      });
  }
}
