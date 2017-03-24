import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

players: FirebaseListObservable<any[]>;
player: FirebaseObjectObservable<any>;
folder: any;

  constructor(private af: AngularFire) {
    this.folder = 'playerimages';
    this.players = this.af.database.list('/Players') as FirebaseListObservable<Player[]>
  }
  getPlayers(){

    return this.players;
  }

  getPlayerDetails(id){
    this.player = this.af.database.object('/Players/'+id) as FirebaseObjectObservable<Player>
    return this.player;
  }

  addPlayer(player){
    //create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        player.image = selectedFile.name;
        player.path = path;
        return this.players.push(player);
      })
    }
  }

  updatePlayer(id,player){
    return this.players.update(id,player);
  }

  deletePlayer(id){
    return this.players.remove(id);
  }
}

interface Player{
  $key?:string;
  name?:string;
  age?:string;
  address?:string;
  phone?:string;
  role?:string;
  image?:string;
}
