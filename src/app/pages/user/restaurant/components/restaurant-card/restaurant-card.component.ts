import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Restaurant} from "../../../../../shared/models/restaurant";
import {RestaurantService} from "../../service/restaurant.service";
import {ActionSheetController, AlertButton, AlertController} from "@ionic/angular";
import {ActionSheetButton} from "@ionic/core/dist/types/components/action-sheet/action-sheet-interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss'],
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant: Restaurant;
  @Output() deleteRestaurantId: EventEmitter<number> = new EventEmitter<number>();

  private readonly deleteRestaurantAlertButtons: AlertButton[] = [
    {
      text: 'Annuler',
      role: 'cancel',
    },
    {
      text: 'Supprimer le restaurant',
      role: 'confirm',
      handler: () => {
        this.deleteRestaurantId.emit(this.restaurant.id);
      },
    },
  ];

  private readonly ActionSheetButtons: ActionSheetButton[] = [
    {
      text: 'Détails',
      icon: 'eye-outline',
      handler: () => {
        this.router.navigate(['/user/restaurant', this.restaurant?.id]);
      },
    },
    {
      text: 'Éditer',
      icon: 'pencil-outline',
      handler: () => {
        this.router.navigate(['/user/restaurant', this.restaurant?.id, 'edit']);
      },
    },
    {
      text: 'Supprimer',
      role: 'destructive',
      icon: 'trash-outline',
      handler: () => {
        this.presentDeleteRestaurantAlert()
      },
    },
    {
      text: 'Annuler',
      role: 'cancel',
    },
  ];

  constructor(
    private restaurantService: RestaurantService,
    private router: Router,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
  ) {
  }

  ngOnInit() {
  }

  async presentDeleteRestaurantAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmation de suppression',
      message: `Êtes-vous sur de vouloir supprimer le restaurant « ${this.restaurant.name} » ?`,
      buttons: this.deleteRestaurantAlertButtons,
    });

    await alert.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions pour le restaurant',
      buttons: this.ActionSheetButtons,
    });

    await actionSheet.present();
  }
}
