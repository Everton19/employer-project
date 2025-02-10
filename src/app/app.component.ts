import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'employer-project';

  stepsList: Step[] = [
    {stepName: 'Basic Details', isComplete: false},
    {stepName: 'Skills', isComplete: false},
    {stepName: 'Experience', isComplete: false}
  ]

  active: string = this.stepsList[0].stepName;
}

type Step = {
  stepName: string;
  isComplete: boolean;
}
