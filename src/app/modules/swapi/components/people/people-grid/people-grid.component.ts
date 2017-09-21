import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../../services/http/http.service';
import { PeopleModel } from '../../people/model/people-model';

import * as $ from 'jquery';
// declare var jquery: any;
// declare var $: any;


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
    pagination = {
        count: null,
        next: null,
        previous: null
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
        this.service.get(this.resources.people).then(peoples => {
            if (peoples) {
                this.peoples = peoples[`results`];
                this.pagination.count = Math.round(peoples[`count`] / peoples[`results`].length);
                this.pagination.next = peoples[`next`];
                this.pagination.previous = peoples[`previous`];
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
        this.service.get(this.resources.people, search_term).then(people => {
            if (people) {
                this.peoples = people[`results`];
                this.pagination.count = people[`count`];
                this.pagination.next = people[`next`];
                this.pagination.previous = people[`previous`];
            }
            this.loading.default = false;
        });
    }
    /**
     * @todo
     *
     * @memberof PeopleGridComponent
     */
    paginate(page: string): void {
        this.loading.default = true;
        // this.peoples = [];
        const search = this.getParameterByName('search', page);
        page = this.getParameterByName('page', page);
        if (search !== '' && search !== null) {
            page = `${page}&search=${search}`;
        }
        this.service.get(this.resources.people, null, null, page).then(people => {
            if (people) {
                people[`results`].forEach(item => {
                    this.peoples.push(item);
                });
                console.log(this.peoples);
                this.pagination.count = people[`count`];
                this.pagination.next = people[`next`];
                this.pagination.previous = people[`previous`];
            }
            this.loading.default = false;
        });
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
            this.service.get(this.resources.planets, null, Number(id[1])).then(planet => {
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
                this.service.get(this.resources.films, null, Number(id[1])).then(response => {
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
                this.service.get(this.resources.species, null, Number(id[1])).then(respose => {
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
                this.service.get(this.resources.starships, null, Number(id[1])).then(respose => {
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
                this.service.get(this.resources.vehicles, null, Number(id[1])).then(respose => {
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

    pageScroll() {
        let pageinit = 100;
        $(window).on('scroll', event => {
            const windscroll = $(window).scrollTop();
            if (windscroll > pageinit) {
                this.paginate(this.pagination.next);
                pageinit += 100;
            }
            // if (window.innerWidth > 993) {
            //     /*
            //     * comparação
            //     */
            //     // if (windscroll > 10) {
            //     //     $(this.ref_tab).addClass('fixed-scroll');
            //     //     $(this.compare_dash).addClass('side-nav-scroll');
            //     // } else {
            //     //     $(this.ref_tab).removeClass('fixed-scroll');
            //     //     $(this.compare_dash).removeClass('side-nav-scroll');
            //     // }
            // } else {
            //     // $(this.ref_tab).removeClass('fixed-scroll');
            //     // $(this.compare_dash).removeClass('side-nav-scroll');
            // }
        });
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
}
