import {Component, ViewEncapsulation} from 'angular2/core'
import {Hero} from '../hero'

@Component({
  selector: 'my-hero-detail',
  moduleId: module.id,
  templateUrl: 'tpl.html',
  inputs: ['hero']
})
export class HeroDetailComponent {
  public hero: Hero;
}
