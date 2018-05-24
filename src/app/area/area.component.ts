import { Component, OnInit, TemplateRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Area } from './area.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AreaSevice } from '../services/area.service';

@Component({
    selector: 'area',
    templateUrl: './area.component.html',
    styleUrls: ['./area.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(1000)
            ]),
            transition('* => void', [
                animate(1000, style({ opacity: 0 }))
            ])
        ])
    ]
})

export class AreaComponent implements OnInit {

    noDataFound: String = 'No data found!';
    modalArea: BsModalRef;
    areas: Area[] = [];
    area: Area = new Area(0, '');
    actionSelected: number;
    actionTitle = {
        NONE: '',
        ADD: 'Add area',
        EDIT: 'Edit area',
        VIEW: 'View area'
    }
    actionEnum = {
        NONE: 0,
        ADD: 1,
        EDIT: 2,
        VIEW: 3
    }

    constructor(private modalService: BsModalService,
        private areaService: AreaSevice) {
    }

    ngOnInit() {
        this.getAreas();
    }

    openModal(template: TemplateRef<any>, action: number) {
        this.actionSelected = action;
        this.modalArea = this.modalService.show(template);
        this.reset();
    }

    getAreas() {
        this.areaService.getAreas().subscribe(response => {
            this.areas = response
        });
    }

    reset(): void {
        this.area = new Area(0, '');
    }    

    addArea() {
        this.area.id = 0;
        this.areaService.addArea(this.area)
            .subscribe(area => {
                this.areas.push(area);
                this.modalArea.hide();
            });
    }

    onSubmit() {
        this.addArea();
    }

}