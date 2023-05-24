import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-inline-alert',
  templateUrl: './inline-alert.component.html',
  styleUrls: ['./inline-alert.component.scss'],
})
export class InlineAlertComponent implements OnInit {

  @Input() alertType: InlineAlertType = InlineAlertType.info;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() content: string;

  alertIcon: string;

  constructor() {
  }

  ngOnInit() {
    this.setIcon();
  }

  setIcon() {
    switch (this.alertType) {
      case InlineAlertType.success:
        this.alertIcon = 'checkmark-circle-outline';
        break;
      case InlineAlertType.info:
        this.alertIcon = 'information-circle-outline';
        break;
      case InlineAlertType.warning:
        this.alertIcon = 'warning-outline';
        break;
      case InlineAlertType.error:
        this.alertIcon = 'alert-circle-outline';
        break;
    }
  }
}

export enum InlineAlertType {
  success = 'success',
  info = 'primary',
  warning = 'warning',
  error = 'danger',
}
