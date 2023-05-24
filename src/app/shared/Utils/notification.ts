import {ToastController} from "@ionic/angular";

export class Notification {

  private notification: HTMLIonToastElement;

  constructor(
    private message: string = '',
    private notificationType: NotificationType = NotificationType.info,
    private duration: number = 4000,
    private toastCtrl: ToastController = new ToastController(),
  ) {
  }

  getIcon() {
    switch (this.notificationType) {
      case NotificationType.success:
        return 'checkmark-circle-outline';
      case NotificationType.info:
        return 'information-circle-outline';
      case NotificationType.warning:
        return 'warning-outline';
      case NotificationType.error:
        return 'alert-circle-outline';
      default:
        return '';
    }
  }

  private async initNotification() {
    this.notification = await this.toastCtrl.create({
      position: 'top',
      icon: this.getIcon(),
      message: this.message,
      color: this.notificationType,
      duration: this.duration,
      buttons: [{
        icon: 'close',
        role: 'cancel',
      }]
    });
  }

  private showNotification() {
    this.notification.present();
  }

  async notify() {
    await this.initNotification();
    this.showNotification();
  }
}

export enum NotificationType {
  success = 'success',
  info = 'primary',
  warning = 'warning',
  error = 'danger',
}
