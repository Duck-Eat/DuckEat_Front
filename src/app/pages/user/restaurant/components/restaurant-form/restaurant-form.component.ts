import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RestaurantService} from '../../service/restaurant.service';
import {Router} from '@angular/router';
import {NavController, ToastController} from '@ionic/angular';
import {Restaurant} from '../../../../../shared/models/restaurant';
import {Notification, NotificationType} from '../../../../../shared/Utils/notification';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.scss'],
})
export class RestaurantFormComponent implements OnInit {

  @Input() restaurant: Restaurant | undefined = undefined;
  @Input() isLoading: boolean = true;

  postalCodeRegex: RegExp = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/
  restaurantForm: FormGroup;
  readonly validations = {
    'name': [
      {type: 'required', message: 'Le nom du restaurant est requis.'},
      {type: 'maxlength', message: 'Le nom du restaurant doit faire moins de 256 caractères.'},
    ],
    'address': [
      {type: 'required', message: 'L\'adresse du restaurant est requise.'},
      {type: 'maxlength', message: 'L\'adresse du restaurant doit faire moins de 256 caractères.'},
    ],
    'postalCode': [
      {type: 'required', message: 'Le code postal est requis.'},
      {type: 'minLength', message: 'Le code postal doit être sur 5 caractères exactement.'},
      {type: 'maxlength', message: 'Le code postal doit être sur 5 caractères exactement.'},
      {type: 'pattern', message: 'Le code postal doit être un code postal français valide.'},
    ],
    'city': [
      {type: 'required', message: 'La ville est requise.'},
      {type: 'maxlength', message: 'La ville doit faire moins de 256 caractères.'},
    ],
  };
  private readonly restaurantControls = {
    name: [null, [
      Validators.required,
      Validators.maxLength(255),
    ]],
    address: [null, [
      Validators.required,
      Validators.maxLength(255),
    ]],
    postalCode: [null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
      Validators.pattern(this.postalCodeRegex),
    ]],
    city: [null, [
      Validators.required,
      Validators.maxLength(255),
    ]],
    description: [null],
  };

  constructor(
    private formBuilder: FormBuilder,
    private restaurantService: RestaurantService,
    private router: Router,
    private toastCtrl: ToastController,
    private navController: NavController
  ) {
  }

  ngOnInit() {
    this.initRestaurantForm();
    this.setRestaurantForm(this.restaurant);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLoading'].currentValue === false && !changes['isLoading'].isFirstChange()) {
      this.setRestaurantForm(this.restaurant);
    }
  }

  initRestaurantForm() {
    this.restaurantForm = this.formBuilder.group(this.restaurantControls);
  }

  setRestaurantForm(restaurant: Restaurant | undefined) {
    if (restaurant === undefined) {
      return;
    }

    this.restaurantForm.setValue({
      name: restaurant.name,
      address: restaurant.address,
      postalCode: restaurant.postalCode,
      city: restaurant.city,
      description: restaurant.description,
    });
  }

  async onSubmitForm() {
    const formValues = this.restaurantForm.value;

    const restaurant: Restaurant = {
      name: formValues.name ? formValues.name.trim() : null,
      address: formValues.address ? formValues.address.trim() : null,
      postalCode: formValues.postalCode ? formValues.postalCode.trim() : null,
      city: formValues.city ? formValues.city.trim() : null,
      description: formValues.description ? formValues.description.trim() : null,
    } as Restaurant;

    if (this.restaurant) {
      restaurant.id = this.restaurant.id;

      this.restaurantService.updateRestaurant(restaurant).subscribe({
        next: () => {
          this.router.navigate(['/user/restaurant', this.restaurant?.id]);
          new Notification('Le restaurant est modifié.', NotificationType.success).notify();
        },
        error: () => {
          new Notification('Impossible de mettre à jour le restaurant', NotificationType.error).notify();
        }
      });
    } else {
      this.restaurantService.addRestaurant(restaurant).subscribe({
        next: () => {
          this.router.navigate(['/user/restaurant']);
          new Notification('Le restaurant est créé.', NotificationType.success).notify();
        },
        error: () => {
          new Notification('Impossible de créer le restaurant', NotificationType.error).notify();
        }
      });
    }
  }

  goBack() {
    this.navController.back();
  }

  get name() {
    return this.restaurantForm.get('name')!;
  }

  get address() {
    return this.restaurantForm.get('address')!;
  }

  get postalCode() {
    return this.restaurantForm.get('postalCode')!;
  }

  get city() {
    return this.restaurantForm.get('city')!;
  }
}
