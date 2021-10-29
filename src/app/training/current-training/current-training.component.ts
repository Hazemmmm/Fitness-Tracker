import { StopTrainingComponent } from './../stop-training/stop-training.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css'],
})
export class CurrentTrainingComponent implements OnInit {
  progress: number = 0;
  timer: number = 0;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.onStartOrResume();
  }

  onStartOrResume(): void {
    this.timer = window.setInterval(() => {
      this.progress = this.progress + 10;

      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop(): void {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
