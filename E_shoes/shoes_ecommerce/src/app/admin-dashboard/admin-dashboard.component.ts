import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myChart = new Chart('myChart', {
      type: 'polarArea',
      data: {
          labels: ['Customer', 'Orders', 'Resend'],
          datasets: [{
              label: '# of Votes',
              data: [1200, 1900, 3000],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  
              ],
            //   borderColor: [
            //       'rgba(255, 99, 132, 1)',
            //       'rgba(54, 162, 235, 1)',
            //       'rgba(255, 206, 86, 1)',
            //       'rgba(75, 192, 192, 1)',
            //       'rgba(153, 102, 255, 1)',
            //       'rgba(255, 159, 64, 1)'
            //   ],
            //   borderWidth: 1
          }]
      },
      options: {
        //   scales: {
        //       y: {
        //           beginAtZero: true
        //       }
        //   }
        responsive:true,
      }
  });

  const myChart2 = new Chart('sales', {
    type: 'bar',
    data: {
        labels: ['Jau', 'Feb', 'March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Monthly Sales',
            data: [1200, 1900, 3000,1200, 1900, 3000,1200, 1900, 3000,1200, 1900, 3000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                
            ],
          //   borderColor: [
          //       'rgba(255, 99, 132, 1)',
          //       'rgba(54, 162, 235, 1)',
          //       'rgba(255, 206, 86, 1)',
          //       'rgba(75, 192, 192, 1)',
          //       'rgba(153, 102, 255, 1)',
          //       'rgba(255, 159, 64, 1)'
          //   ],
          //   borderWidth: 1
        }]
    },
    options: {
      //   scales: {
      //       y: {
      //           beginAtZero: true
      //       }
      //   }
      responsive:true,
    }
});
  }

}
