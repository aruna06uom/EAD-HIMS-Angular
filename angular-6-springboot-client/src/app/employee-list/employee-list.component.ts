import { EmployeeDetailsComponent } from './../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {jspdf} from 'jspdf';  
import {html2canvas} from 'html2canvas';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {PrintService} from './../print.service';
import * as jsPDF from 'jspdf';


@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  element: HTMLElement;

  constructor(public printService: PrintService,config: NgbModalConfig, private modalService: NgbModal,private employeeService: EmployeeService,
    private router: Router) {
       // customize default values of modals used by this component tree
       config.backdrop = 'static';
       config.keyboard = false;
    }

    title = 'angular-print-service';


  
    open(content) {
      this.modalService.open(content);
    }
  ngOnInit() {
    this.reloadData();
  }

 captureScreen= function ()  
  {  

    html2canvas(document.querySelector("#contentToConvert")).then(canvas => {

      var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);

      var imgData  = canvas.toDataURL("image/jpeg", 1.0);
      pdf.addImage(imgData,0,0,canvas.width, canvas.height);
      pdf.save('converteddoc.pdf');

  });
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  btnClick= function () {
    this.router.navigateByUrl('/register');
};
}
