import { Component, OnInit, TemplateRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Area } from './area.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

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

    modalRef: BsModalRef;
    areas: Area[] = [];    
    actionSelected: number;    
    actionEnum = {
        NONE: 0,
        ADD: 1,
        EDIT: 2,
        VIEW: 3
    }

    constructor(private modalService: BsModalService) {
    }

    ngOnInit() {

    }

    openModal(template: TemplateRef<any>, action: number) {
        this.actionSelected = action;
        this.modalRef = this.modalService.show(template);
    }

}