import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PageEvent } from '@angular/material';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
    @Input() count: number;
    @Input() next: string;
    @Input() previous: string;

    @Output() page = new EventEmitter();
    total: number;
    /**
     * Creates an instance of PaginationComponent.
     * @memberof PaginationComponent
     */
    constructor() { }
    /**
     *
     *
     * @memberof PaginationComponent
     */
    ngOnInit() {
    }

    doPagination(page: string): void {
        console.log(page);
        this.page.emit(page);
    }

    totalItems(value: number): number {
        return Math.round(value / 10);
    }
}
