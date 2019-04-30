import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private service: OrderService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {

    // tslint:disable-next-line:no-conditional-assignment
    if (form == null) {
      form.resetForm();
    }

    this.service.formData.OrderID = null;
    this.service.formData.OrderNo = Math.floor(100000 + Math.random() * 900000).toString();
    this.service.formData.CustomerID = 0;
    this.service.formData.PMethod = '';
    this.service.formData.GTotal = 0;
  }

}
