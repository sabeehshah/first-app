import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
id;
name;
age;
phone;
address;
role;
wickets;
runs;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getPlayerDetails(this.id).subscribe(player =>{
      console.log(player);
      this.name = player.name;
      this.age = player.age;
      this.phone = player.phone;
      this.address = player.address;
      this.role = player.role;
      this.wickets = player.wickets;
      this.runs = player.runs;

    });
  }

  onEditSubmit(){
    let player = {
      name:this.name,
      age:this.age,
      phone:this.phone,
      address:this.address,
      role:this.role,
      wickets:this.wickets,
      runs:this.runs

    }

    this.firebaseService.updatePlayer(this.id, player);
    this.router.navigate(['/players']);
  }

}
