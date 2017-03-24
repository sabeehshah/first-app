import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
name:any;
age:any;
phone:any;
address:any;
role:any;
wickets:any;
runs:any;
image:any;

  constructor(
    private FirebaseService: FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let player = {
      name: this.name,
      age: this.age,
      phone: this.phone,
      address: this.address,
      role: this.role,
      wickets: this.wickets,
      runs: this.runs

    }

    this.FirebaseService.addPlayer(player);
    this.router.navigate(['players']);
  }

}
