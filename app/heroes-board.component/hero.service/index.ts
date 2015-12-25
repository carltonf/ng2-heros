import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes'

@Injectable()
export class HeroService {
  getHeroes(origin: string){
    return Promise.resolve(HEROES[origin]);
  }
}