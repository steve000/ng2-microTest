import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './model/register-model';  /* 内置校验 */

// 自定义校验  import在app.module

@Component({
  selector: 'form-quick-start',
  templateUrl: './form-quick-start.component.html',
  styleUrls: ['./form-quick-start.component.scss']
})
export class FormQuickStartComponent implements OnInit {
  public regModel: RegisterModel = new RegisterModel();

  constructor() { }

  ngOnInit() {
  }
}
