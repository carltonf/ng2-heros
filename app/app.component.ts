import {Component} from 'angular2/core';

// If we need a Hero that goes beyond simple properties, a Hero with logic and behavior, we must define a class. If we only need type checking, the interface is sufficient and lighter weight.
interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <div><input [(ngModel)]="hero.name" placeholder="name"></div>
        </div>
    `
})
export class AppComponent {
    public title = 'Tour of Heroes';
    public hero : Hero = { id: 1, name: 'Windstorm' };
}
