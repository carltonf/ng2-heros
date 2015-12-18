import {Component, ViewEncapsulation} from 'angular2/core'
import {Hero} from '../hero'

@Component({
  selector: 'my-hero-detail',
  // resource resolution is using relative path to project root as
  // in development, it's base URL anyway.
  //
  // TODO should use a variable holding the path to the component
  templateUrl: 'app/hero-detail.component/tpl.html',
  inputs: ['hero']
})
export class HeroDetailComponent {
  public hero: Hero;
}
