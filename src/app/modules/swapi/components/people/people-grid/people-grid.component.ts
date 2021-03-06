import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import * as $ from 'jquery';

import { HttpService } from '../../../services/http/http.service';
import { PeopleModel } from '../../people/model/people-model';
import { PeopleFormComponent } from '../../people/people-form/people-form.component';

@Component({
    selector: 'app-people-grid',
    templateUrl: './people-grid.component.html',
    styleUrls: ['./people-grid.component.scss']
})
export class PeopleGridComponent implements OnInit {
    title: string;
    peoples: Array<any>;
    films: Array<any>;
    species: Array<any>;
    starships: Array<any>;
    vehicles: Array<any>;
    data_end: boolean;
    paginator: boolean;
    page_loaded: Array<number>;
    pagination = {
        count: null,
        next: null,
        previous: null,
        current: null,
    };
    loading = {
        default: null,
        homeworld: null,
        films: null,
        species: null,
        starships: null,
        vehicles: null,
    };
    homeworld: string;
    private readonly resources = {
        people: 'people',
        planets: 'planets',
        films: 'films',
        species: 'species',
        starships: 'starships',
        vehicles: 'vehicles',
    };
    /**
     * Creates an instance of PeopleGridComponent.
     * @memberof PeopleGridComponent
     */
    constructor(
        private service: HttpService,
        public dialog: MdDialog
    ) { }
    /**
     * Init
     *
     * @memberof PeopleGridComponent
     */
    ngOnInit() {
        this.title = `A People resource is an individual person or character within the Star Wars universe.`;
        this.peoples = [];
        this.getPeoples();
        this.pageScroll();
    }
    /**
     * Get all
     *
     * @memberof PeopleGridComponent
     */
    getPeoples() {
        this.loading.default = true;
        this.page_loaded = [];
        this.service.get(this.resources.people).then(peoples => {
            if (peoples) {
                this.peoples = peoples[`results`];
                this.pagination.count = Math.round(peoples[`count`] / peoples[`results`].length);
                this.pagination.next = peoples[`next`];
                this.pagination.previous = peoples[`previous`];
                this.data_end = false;
            }
            this.loading.default = false;
        });
    }
    /**
     * Serch by name
     *
     * @memberof PeopleGridComponent
     */
    search(search_term: string): void {
        this.loading.default = true;
        this.peoples = [];
        this.page_loaded = [];
        this.service.get(this.resources.people, { term: search_term }).then(people => {
            if (people) {
                this.peoples = people[`results`];
                this.pagination.count = people[`count`];
                this.pagination.next = people[`next`];
                this.pagination.previous = people[`previous`];
                this.data_end = false;
            }
            this.loading.default = false;
        });
    }
    /**
     *
     *
     * @memberof PeopleGridComponent
     */
    paginate(page: string): void {
        this.loading.default = true;
        const search = this.getParameterByName('search', page);
        page = this.getParameterByName('page', page);
        if (search !== '' && search !== null) {
            page = `${page}&search=${search}`;
        }
        if (this.pagination.next !== null) {
            this.service.get(this.resources.people, { page: page }).then(people => {
                if (people) {
                    people[`results`].forEach(item => {
                        this.peoples.push(item);
                    });
                    this.pagination.count = people[`count`];
                    this.pagination.next = people[`next`];
                    this.pagination.previous = people[`previous`];
                }
                this.loading.default = false;
            });
        } else {
            this.data_end = true;
            this.loading.default = false;
        }
    }
    /**
     *
     *
     * @param {string} [homeworld]
     * @param {Array<string>} [films]
     * @param {Array<string>} [species]
     * @param {Array<string>} [starships]
     * @param {Array<string>} [vehicles]
     * @memberof PeopleGridComponent
     */
    loadItems(homeworld?: string, films?: Array<string>, species?: Array<string>,
        starships?: Array<string>, vehicles?: Array<string>): void {
        this.getHomeworld(homeworld);
        this.getFilms(films);
        this.getSpecie(species);
        this.getStarShip(starships);
        this.getVehicle(vehicles);
    }
    /**
     *
     *
     * @param {string} address
     * @memberof PeopleGridComponent
     */
    getHomeworld(address: string): void {
        this.homeworld = '';
        if (address.length > 0) {
            this.loading.homeworld = true;
            const id = address.split('/').reverse();
            this.service.get(this.resources.planets, { id: Number(id[1]) }).then(planet => {
                this.homeworld = (planet) ? planet[`name`] : 'unknow';
                this.loading.homeworld = false;
            });
        }
    }
    /**
     *
     *
     * @param {string} address
     * @memberof PeopleGridComponent
     */
    getFilms(address: Array<string>): void {
        this.films = [];
        if (address.length > 0) {
            this.loading.films = true;
            address.forEach(item => {
                const id = item.split('/').reverse();
                this.service.get(this.resources.films, { id: Number(id[1]) }).then(response => {
                    if (response) {
                        this.films.push(response);
                    }
                    this.loading.films = false;
                });
            });
        }
    }
    /**
     *
     *
     * @param {Array<string>} address
     * @memberof PeopleGridComponent
     */
    getSpecie(address: Array<string>): void {
        this.species = [];
        if (address.length > 0) {
            this.loading.species = true;
            address.forEach(item => {
                const id = item.split('/').reverse();
                this.service.get(this.resources.species, { id: Number(id[1]) }).then(respose => {
                    if (respose) {
                        this.species.push(respose);
                    }
                    this.loading.species = false;
                });
            });
        }
    }
    /**
     *
     *
     * @param {Array<string>} address
     * @memberof PeopleGridComponent
     */
    getStarShip(address: Array<string>): void {
        this.starships = [];
        if (address.length > 0) {
            this.loading.starships = true;
            address.forEach(item => {
                const id = item.split('/').reverse();
                this.service.get(this.resources.starships, { id: Number(id[1]) }).then(respose => {
                    if (respose) {
                        this.starships.push(respose);
                    }
                    this.loading.starships = false;
                });
            });
        }
    }
    /**
     *
     *
     * @param {Array<string>} address
     * @memberof PeopleGridComponent
     */
    getVehicle(address: Array<string>): void {
        this.vehicles = [];
        if (address.length > 0) {
            this.loading.vehicles = true;
            address.forEach(item => {
                const id = item.split('/').reverse();
                this.service.get(this.resources.vehicles, { id: Number(id[1]) }).then(respose => {
                    if (respose) {
                        this.vehicles.push(respose);
                    }
                    this.loading.vehicles = false;
                });
            });
        }
    }
    /**
     *
     *
     * @param {string} gender
     * @returns {string}
     * @memberof PeopleGridComponent
     */
    setGender(gender: string): string {
        try {
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
        } catch (error) {
            console.log(error);
        }
    }
    /**
     *
     *
     * @param {string} date
     * @returns {string}
     * @memberof PeopleGridComponent
     */
    dateFormat(date: string): string {
        return `${new Date(date).getFullYear()}`;
    }
    /**
     *
     *
     * @param {any} name
     * @param {any} url
     * @returns
     * @memberof PeopleGridComponent
     */
    getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
        const results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, ''));
    }
    /**
     *
     *
     * @memberof PeopleGridComponent
     */
    pageScroll() {
        if (document.documentElement.scrollHeight !== document.documentElement.clientHeight) {
            this.paginator = true;
        } else {
            this.paginator = false;
            this.page_loaded = [];
            $(window).on('scroll', event => {
                if ($(window).scrollTop() + $(window).height() === $(document).height()) {
                    if (!this.inArray(Number(this.getParameterByName('page', this.pagination.next)))) {
                        this.page_loaded.push(Number(this.getParameterByName('page', this.pagination.next)));
                        this.paginate(this.pagination.next);
                    }
                }
            });
        }
    }
    /**
     * Verifica	o ID de cada elemento da nova lista e compara com o
     * ID da lista atual. Se os IDs forem iguais, o elemento que
     * está no navegador não será atualizado.
     *
     * @param {number} index
     * @param {*} names
     * @returns {number}
     * @memberof NgForComponent
     */
    mySave(index: number, names: any): number {
        return names.id;
    }
    /**
     *
     * @returns {boolean}
     * @memberOf NgForComponent
     */
    inArray(newvalue: number): boolean {
        return this.page_loaded.some((value, index) => newvalue === value);
    }
    /**
     *
     *
     * @param {string} resource
     * @param {string} param
     * @memberof PeopleGridComponent
     */
    openDialog(resource: string, param: string): void {
        const dialogRef = this.dialog.open(PeopleFormComponent, {
            width: '50%',
            height: '50%',
            hasBackdrop: true,
            data: {
                resource: resource,
                param: param
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed ' + result);
        });
    }
}
