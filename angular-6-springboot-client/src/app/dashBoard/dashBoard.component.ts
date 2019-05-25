import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label ,SingleDataSet} from 'ng2-charts';
import { ItemDetailsService } from "../Service/itemDetails.service";
import { Observable } from "rxjs";
import { ItemDetails } from '../Service/item-details';
import { ItemsCount } from '../Service/item-count.';


@Component({
  selector: 'app-create-employee',
  templateUrl: './dashBoard.component.html',
  styleUrls: ['./dashBoard.component.css']
})
export class DashBoard {

  itemDetailsList: Observable<ItemsCount>;

  title1 = 'Expired Drugs Count-2017/2018';
  title2 = 'Expired Item Details (2019-04-19)';
  title3 = 'Expired and Non-Expired Item';
  title4 = 'Number of Employees';

  // ADD CHART OPTIONS. 
  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: '1st Year',
      data: [21, 56, 4, 31, 45, 0, 57, 61, 9, 17, 24, 59] 
    },
    { 
      label: '2nd Year',
      data: [47, 9, 28, 54, 77, 51, 24,0,12,32,0]
    }
  ];
// CHART COLOR.
colors = [
  { // 1st Year.
    backgroundColor: 'rgba(77,83,96,0.2)'
  },
  { // 2nd Year.
    backgroundColor: 'rgba(30, 169, 224, 0.8)'
  }
]

// CHART CLICK EVENT.
onChartClick(event) {
  console.log(event);
}

public SystemName: string = "Expired Item (Day)";
  firstCopy = false;

  // data
  public lineChartData: Array<number> = [ 1,8,49,50,51];
 
  public labelMFL: Array<any> = [
      { data: this.lineChartData,
        label: this.SystemName
      }
  ];
  // labels
  public lineChartLabels: Array<any> = ["2019-04-19 10:00:00", "2019-04-19 10:27:00", "2019-04-19 10:28:00", "2019-04-19 10:29:00", "2019-04-19 10:30:00" ];
  
  constructor(private itemDetailService: ItemDetailsService) {}

  public lineChartOptions: any = {
    responsive: true,
    scales : {
      yAxes: [{
        ticks: {
          max : 60,
          min : 0,
        }
      }],
      xAxes: [{
        min: '2018-01-29 10:08:00', // how to? 
      //  max: '2018-01-29 10:48:00', // how to?
        type: 'time',
        time: {        
          unit: 'minute',
          unitStepSize: 10,
          displayFormats: {
            'second': 'HH:mm:ss',
            'minute': 'HH:mm:ss',
            'hour': 'HH:mm',
          },
        },
        }],
    },
  };

   _lineChartColors:Array<any> = [{
       backgroundColor: 'red',
        borderColor: 'red',
        pointBackgroundColor: 'red',
        pointBorderColor: 'red',
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'red' 
      }];



  public lineChartType = 'line';

  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  reloadData() {
    this.itemDetailsList = this.itemDetailService.loadItems();
    console.log(this.itemDetailsList);
  }
  //3
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  		/*allVal.add(alldrugsExpired);
		allVal.add(alldrugsNonExpired);
		allVal.add(allequipmentExpired);
		allVal.add(allequipmentNonExpired);*/
  public pieChartLabels: Label[] = [['Alldrugs-Expired'], ['Alldrugs-NonExpired'], 'Allequipment-Expired','allequipment-NonExpired'];
  public pieChartData: number[] = [300, 500, 100,490];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

 

  ngOnInit() {
    this.reloadData();
  }



  changeLabels() {
    const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
      'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
      'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
      'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
      'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
    const randomWord = () => words[Math.trunc(Math.random() * words.length)];
    this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
  }

  addSlice() {
    this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
    this.pieChartData.push(400);
    this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
  }

  removeSlice() {
    this.pieChartLabels.pop();
    this.pieChartData.pop();
    this.pieChartColors[0].backgroundColor.pop();
  }

  changeLegendPosition() {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }

  //4
  // PolarArea
  public polarAreaChartLabels: Label[] = ['Doctors', 'Nurse', 'Grade-A', 'Grade-B', 'Grade-C'];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';
}


