import {Component, ViewEncapsulation} from 'angular2/core'
import {Hero} from '../hero'

@Component({
  selector: 'my-hero-detail',
  // moduleId is just the relative path from project root to this module. In
  // CommonJS, "module.id" would be resolved automatically to the path, but
  // SystemJS doesn't have this feature (module will be undefined) see
  // issue#6053.
  //
  // However it's just a path value, we can set it manually and this is still
  // better than prefixing every URLs for templates and styles.
  //
  // NOTE: (according to commit#db096a5e22d229db2a3aa2)
  // 1. the path must end with '/'
  // 2. no scheme should be prefixed
  moduleId: 'app/hero-detail.component/',
  // resource resolution is using relative path to project root as
  // in development, it's base URL anyway.
  //
  // TODO should use a variable holding the path to the component
  templateUrl: 'tpl.html',
  inputs: ['hero']
})
export class HeroDetailComponent {
  public hero: Hero;
}
