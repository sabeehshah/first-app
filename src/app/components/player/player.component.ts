import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
id:any;
player:any;
imageUrl:any;

  constructor(
    private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    //getID

    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getPlayerDetails(this.id).subscribe(player => {
     this.player = player;
     console.log(player);

    let storageRef = firebase.storage().ref();
    let spaceRef = storageRef.child(this.player.path);
    storageRef.child(this.player.path).getDownloadURL().then((url) =>{
      //set img url
      this.imageUrl = url;
    }).catch((error) => {
      console.log(error);
    });

   });
  }

  onDeleteClick(){
    this.firebaseService.deletePlayer(this.id);
    this.router.navigate(['/players']);
  }
}
