import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-insurance-premium-calculator';
  value: any = 5550;
  clc: number = 0;

  public insuranceForm: FormGroup = new FormGroup({
    inputValue: new FormControl(5550, Validators.required)
  });

  addOne() {
    this.value++;
  }
  removeOne() {
    this.value--;
  }

  updateSetting(event: any) {
    this.value = event.value;
  }

  tab: any;
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  installment: any;

  onClick(check: any) {
    if (check == 1) {
      this.tab = 'tab1';
      this.installment = 1;
    } else if (check == 2) {
      this.tab = 'tab2';
      this.installment = 2;
    } else if (check == 3) {
      this.tab = 'tab3';
      this.installment = 3;
    }
    else {
      this.tab = 'tab4';
      this.installment = 4;
    }
  }

  step: any;
  step1: any;
  step2: any;
  damage: any;

  onStepClick(check: any) {
    if (check == 1) {
      this.step = 'step1';
      this.damage = 1;
    } else {
      this.step = 'step2';
      this.damage = 2;
    }
  }

  classApplied1 = false;
  toggleClass1() {
    this.classApplied1 = !this.classApplied1;
  }
  classApplied2 = false;
  toggleClass2() {
    this.classApplied2 = !this.classApplied2;
  }
  classApplied3 = false;
  toggleClass3() {
    this.classApplied3 = !this.classApplied3;
  }
  classApplied4 = false;
  toggleClass4() {
    this.classApplied4 = !this.classApplied4;
  }
  classApplied5 = false;
  toggleClass5() {
    this.classApplied5 = !this.classApplied5;
  }
  classApplied6 = false;
  toggleClass6() {
    this.classApplied6 = !this.classApplied6;
  }


  Rates(value: any): number {
    if (value <= 1000) return 20;
    else if (value > 1000 && value <= 3000) return 70;
    else if (value > 3000 && value <= 6000) return 130;
    else if (value > 6000 && value <= 9000) return 180;
    else return 200;
  }

  rate: any;
  contribution: any;
  result: any;

  Calculate(value: any, installment: any, step: any): any {
    this.rate = this.Rates(this.value);
    if (installment == 1)
      this.contribution = this.rate * 0.98;
    else if (installment == 2 || installment == 3)
      this.contribution = this.rate;
    else
      this.contribution = this.rate * 1.04;

    if (step == "step1")
      this.result = this.contribution * 0.95;
    else if (step == "step2")
      this.result = this.contribution * 1.08;
    else
      this.result = this.contribution * 1;

    return Math.ceil(this.result);
  }

  isShown = false;
  rts: any;

  onSubmit() {
    this.isShown = false;
    this.clc = this.Calculate(this.value, this.installment, this.step);
  }

  onNotSubmit() {
    this.isShown = true;
  }
}
