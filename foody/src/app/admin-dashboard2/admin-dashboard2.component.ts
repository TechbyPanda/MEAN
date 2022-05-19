import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-admin-dashboard2',
  templateUrl: './admin-dashboard2.component.html',
  styleUrls: ['./admin-dashboard2.component.css']
})
export class AdminDashboard2Component implements OnInit {

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

  const monthly_sales = new Chart('monthly_sales', {
    type: 'polarArea',
    data: {
        labels: ['january', 'february', 'march','april','may','june'],
        datasets: [{
            label: '# of Votes',
            data: [1900, 3000,1200, 1900, 3000,1200],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 132, 235, 1)',
                'rgba(255, 206, 78, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 85, 295, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(234, 99, 132, 1)',
                'rgba(54, 122, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 156, 1)',
                'rgba(54, 163, 235, 1)',
                'rgba(255, 206, 96, 1)',
                
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

const stock = new Chart('stock', {
  type: 'polarArea',
  data: {
      labels: ['january', 'february', 'march','april','may','june'],
      datasets: [{
          label: '# of Votes',
          data: [1900, 3000,1200, 1900, 3000,1200],
          backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 132, 235, 1)',
              'rgba(255, 206, 78, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 85, 295, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(234, 99, 132, 1)',
              'rgba(54, 122, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 156, 1)',
              'rgba(54, 163, 235, 1)',
              'rgba(255, 206, 96, 1)',
              
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

const sales = new Chart('sales', {
  type: 'bar',
  data: {
      labels: ['january', 'february', 'march','april','may','june'],
      datasets: [{
          label: '# of Votes',
          data: [1900, 3000,1200, 1900, 3000,1200],
          backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 132, 235, 1)',
              'rgba(255, 206, 78, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 85, 295, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(234, 99, 132, 1)',
              'rgba(54, 122, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 156, 1)',
              'rgba(54, 163, 235, 1)',
              'rgba(255, 206, 96, 1)',
              
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
