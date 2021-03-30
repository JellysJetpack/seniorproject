import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-osr',
  templateUrl: './osr.component.html',
  styleUrls: ['./osr.component.css']
})

export class OsrComponent implements OnInit {

  chart: any;

  constructor( private srv: SocketService){}

  ngOnInit(): void {

    /* Connect with socket.io server  */
    this.srv.listen('dataupdate').subscribe((res:any) =>{
      console.log(res);
      this.chart.data.datasets[0].data = res;
      this.chart.update();
    });

    /* Graph */
    this.chart = new Chart('canvas', {
      type: 'line',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Overall System Report'
        },
      },

      data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [
          {
            type: 'line',
            label: 'Test Chart',
            data: [10, 3, 6, 11, 38, 5, 6, 17],
            backgroundColor: '#3F3FBF',
            fill: false
          }
        ]
      }
    });


  }


}
