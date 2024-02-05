import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h2>Los juegos de {{ username }}</h2>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">
          {{ game.name }}
        </li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavorite = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavorite.emit(gameName);
  }

  games = [
    {
    id: 1,
    name: 'Tetris',
    },
    {
    id: 2,
    name: 'Pacman',
    },
    {
    id: 3,
    name: 'Super Mario Bros',
    },
];
}
