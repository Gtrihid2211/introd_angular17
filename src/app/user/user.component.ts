import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'Gonzalo'
  isLogged = false;
  favGame = '';

  getFavorite(gameName: string) {
    this.favGame = gameName;
  }

  greet() {
    alert(`Hello ${this.username}!`);
  }

}
