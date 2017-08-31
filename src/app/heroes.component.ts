import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  
    title = 'Tour of heroes';
    heroes: Hero[];    
    selectedHero: Hero;
    
    constructor(private heroService: HeroService){ }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
 
    ngOnInit(): void {
        this.getHeroes();
    }
    
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    } 
    
}