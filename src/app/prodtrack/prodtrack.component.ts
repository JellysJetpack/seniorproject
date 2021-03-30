import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-prodtrack',
  templateUrl: './prodtrack.component.html',
  styleUrls: ['./prodtrack.component.css']
})
export class ProdtrackComponent implements OnInit {
  chart: any;

  constructor() { }

  ngOnInit(): void {

    /* Graph */
    this.chart = new Chart('canvas', {
      type: 'horizontalBar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Realtime Charts'
        },
      },

      data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [
          {
            type: 'horizontalBar',
            label: 'Production Tracking',
            data: [10, 3, 6, 11, 38, 5, 6, 17],
            backgroundColor: '#3F3FBF',
            fill: false
          }
        ]
      }
    });


  }

}
