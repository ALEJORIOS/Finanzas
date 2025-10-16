import { CommonModule } from '@angular/common';
import { Component, resource, ResourceRef } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app/record',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './record.component.html',
  styleUrl: './record.component.scss',
})
export default class RecordComponent {
  recordResource: ResourceRef<any>;
  constructor(private connection: ConnectionService, private router: Router) {
    this.recordResource = resource({
      loader: async () =>
        await firstValueFrom(this.connection.retrieveRecord()),
    });
  }

  goToInsert() {
    this.router.navigate(['/insert']);
  }
}
