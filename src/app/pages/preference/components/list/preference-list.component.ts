import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../authentication/services/auth-service.service';

@Component({
  selector: 'app-preference-list',
  templateUrl: './preference-list.component.html',
  styleUrls: ['./preference-list.component.scss'],
})
export class PreferenceListComponent implements OnInit {
  preferences = [
    { id: 1, label: 'Hamburger', checked: false },
    { id: 2, label: 'Pizza', checked: false },
    { id: 3, label: 'Pâtes', checked: false },
    { id: 4, label: 'Chinois', checked: false },
    { id: 5, label: 'Indien', checked: false }
  ];

  constructor(private http: HttpClient, private authService: AuthServiceService) {}

  ngOnInit() {
  }

  public onPreferenceChange(id: number, checked: boolean) {
    // console.log('ttt');
    console.log(this.authService);
    // const currentUser = this.authService.userData;

    // this.http.put(`/api/users/${currentUser}/preferences/${id}`, { checked }).subscribe();
  }

}
