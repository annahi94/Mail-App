import { Component, OnInit, TemplateRef, Pipe } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Area } from './area.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AreaSevice } from '../services/area.service';

@Pipe({
    name: 'active',
    pure: false
})

@Pipe({
    name: 'inverseActive',
    pure: false
})

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
    area: Area = new Area(0, '', true);    
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

    openModal(template: TemplateRef<any>, action: number, selectedArea?: Area) {
        this.actionSelected = action;
        this.modalArea = this.modalService.show(template);

        if (this.actionSelected === this.actionEnum.ADD)
            this.reset();
        else if(this.actionSelected === this.actionEnum.EDIT)
            this.setFields(selectedArea);
        else
            this.reset();
    }    

    setFields(selectedArea: Area) {        
        this.area = Object.assign({}, selectedArea);
    }

    getAreas() {
        this.areaService.getAreas().subscribe(response => {
            this.areas = response
        });
    }

    reset(): void {
        this.area = new Area(0, '', true);
    }

    activateOrDeactivate(row: Area)
    {
        this.area = Object.assign({}, row);
        this.area.active = !this.area.active;
        
        this.areaService.addArea(this.area)
            .subscribe(area => {
                this.getAreas();
                this.modalArea.hide();
            });
    }

    addArea() {
        this.areaService.addArea(this.area)
            .subscribe(area => {                
                this.getAreas();
                this.modalArea.hide();
            });
    }

    onSubmit() {
        this.addArea();
    }

}