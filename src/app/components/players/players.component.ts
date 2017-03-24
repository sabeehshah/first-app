import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
players:any;
  constructor(private FirebaseService:FirebaseService) { }

  ngOnInit() {
    this.FirebaseService.getPlayers().subscribe(players =>{
      console.log(players);
      this.players = players;
    });
  }

}
