import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../../services/http/http.service';
import { PeopleModel } from '../../people/model/people-model';

@Component({
    selector: 'app-people-grid',
    templateUrl: './people-grid.component.html',
    styleUrls: ['./people-grid.component.scss']
})
export class PeopleGridComponent implements OnInit {
    title: string;
    peoples: Array<any>;
    step: number;
    people: PeopleModel;
    loading = {
        default: null,
        homeworld: null
    };
    homeworld: string;
    private readonly resources = {
        people: 'people',
        planets: 'planets'
    };
    /**
     * Creates an instance of PeopleGridComponent.
     * @memberof PeopleGridComponent
     */
    constructor(
        private service: HttpService
    ) { }
    /**
     * Init
     *
     * @memberof PeopleGridComponent
     */
    ngOnInit() {
        this.title = `A People resource is an individual person or character within the Star Wars universe.`;
        this.peoples = [];
        this.step = 0;
        this.people = new PeopleModel();
        this.getPeoples();
    }
    /**
     * Get all
     *
     * @memberof PeopleGridComponent
     */
    getPeoples() {
        this.loading.default = true;
        this.service.get(this.resources.people).then(peoples => {
            if (peoples) {
                this.peoples = peoples[`results`];
            }
            this.loading.default = false;
            console.log(peoples);
        });
    }
    /**
     * Serch by name
     *
     * @memberof PeopleGridComponent
     */
    search() {
        this.loading.default = true;
        this.peoples = [];
        this.service.get(this.resources.people, this.people.name).then(people => {
            if (people) {
                this.peoples = people[`results`];
            }
            this.loading.default = false;
            console.log(people);
        });
    }

    getHomeworld(address: string): void {
        this.loading.homeworld = true;
        const id = address.split('/').reverse();
        this.homeworld = '';
        this.service.get(this.resources.planets, null, Number(id[1])).then(planet => {
            this.homeworld = (planet) ? planet[`name`] : 'unknow';
            this.loading.homeworld = false;
        });
    }

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

    setGender(gender: string): string {
        let icon = 'ic_gender_';
        switch (gender.toLowerCase()) {
            case 'male':
                icon += 'male';
                break;
            case 'female':
                icon += 'female';
                break;
            case 'n/a':
                icon += 'na';
                break;
            default:
                icon += 'unknown';
                break;
        }
        return `${icon}.svg`;
    }

}
