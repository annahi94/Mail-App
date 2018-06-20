import { Component, OnInit, TemplateRef, Pipe, ViewContainerRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Area } from './area.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AreaSevice } from '../services/area.service';
import { AlertComponent } from 'ngx-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { error } from 'util';

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

    search: string = '';
    noDataFound: String = 'No data found!';
    messages = {
        SUCCESSFUL_OPERATION: 'Successful operation',
        ERROR: 'Error - please contact the administrator'
    }
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
        private areaService: AreaSevice,
        private alert: ToastsManager,
        private container: ViewContainerRef) {
        alert.setRootViewContainerRef(container);
    }

    ngOnInit() {
        this.getAreas();
    }

    openModal(template: TemplateRef<any>, action: number, selectedArea?: Area) {
        this.actionSelected = action;
        this.modalArea = this.modalService.show(template);

        if (this.actionSelected === this.actionEnum.ADD)
            this.reset();
        else if (this.actionSelected === this.actionEnum.EDIT)
            this.setFields(selectedArea);
        else
            this.reset();
    }

    setFields(selectedArea: Area): void {
        this.area = Object.assign({}, selectedArea);
    }

    getAreas(): void {
        this.areaService.getAreas()
            .subscribe(
                response => {
                    this.areas = response.data
                },
                error => {
                    this.alert.error(this.messages.ERROR)
                });
    }

    reset(): void {
        this.area = new Area(0, '', true);
    }

    activateOrDeactivate(row: Area) : void{
        this.area = Object.assign({}, row);
        this.area.Active = !this.area.Active;

        this.areaService.addArea(this.area)
            .subscribe(area => {
                this.getAreas();
                this.alert.success(this.messages.SUCCESSFUL_OPERATION);
            });
    }

    addArea() : void{
        this.areaService.addArea(this.area)
            .subscribe(
                response => {
                    if (response.success) {
                        this.getAreas();
                        this.modalArea.hide();
                        this.alert.success(this.messages.SUCCESSFUL_OPERATION);
                    } else {
                        this.alert.warning(response.msg);
                    }
                },
                error => {
                    this.alert.error(this.messages.ERROR)
                });
    }

    onSubmit() : void{
        this.addArea();
    }

}