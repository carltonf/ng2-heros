import {Component, OnInit, ViewEncapsulation} from 'angular2/core';
import {Hero} from './hero'
import {HeroDetailComponent} from './hero-detail.component/index'
import {HeroListComponent} from './hero-list.component/index'
import {HeroService} from './hero.service/index'

@Component({
  selector: 'heroes-board',
  moduleId: module.id,
  templateUrl: 'tpl.html',
  directives: [HeroListComponent, HeroDetailComponent],
  inputs: ['heroOrigin'],
  providers: [HeroService],
})
export class HeroesBoard implements OnInit {
  public heroOrigin: string;
  public heroes: Hero[];
  public selectedHero: Hero;
  public onSelect(hero: Hero) { this.selectedHero = hero; }

  constructor(private _heroService: HeroService) {}

  // NOTE: do NOT pass getHeroes as then callback as it would lose 'this'
  // context
  getHeroes() {
    this._heroService.getHeroes(this.heroOrigin)
      .then(heroes => {
        this.heroes = heroes;
      });
  }

  ngOnInit() {
    this.getHeroes();
  }
}