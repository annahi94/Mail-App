import { Component, TemplateRef, ViewContainerRef } from "@angular/core";
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ConfigurationProvider } from "./configuration-provider.model";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { ConfigurationTag } from "./configuration-tag.model";
import { TagEnum } from "./tag-enum.model";
import { ConfigurationProviderService } from "../../services/provider-conf.service";
import { ToastsManager } from "ng2-toastr";

@Component({
    selector: 'conf-provider',
    templateUrl: './provider-conf.component.html',
    styleUrls: ['./provider-conf.component.css'],
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

export class ConfigurationProviderComponent {

    search: string = '';
    noDataFound: String = 'No data found!';
    modalConfProvider: BsModalRef;
    configurationsProvider: ConfigurationProvider[];
    configurationProvider: ConfigurationProvider = new ConfigurationProvider(0, null, null);
    tagIN: ConfigurationTag = new ConfigurationTag(0, TagEnum.INVOICE_NUMBER, null);
    tagTA: ConfigurationTag = new ConfigurationTag(0, TagEnum.TOTAL_AMOUNT, null);
    tagID: ConfigurationTag = new ConfigurationTag(0, TagEnum.ISSUE_DATE, null);
    actionSelected: number;
    tagTitle = {
        INVOICE_NUMBER: 'Invoice number',
        TOTAL_AMOUNT: 'Total amount',
        ISSUE_DATE: 'Issue Date'
    }
    actionTitle = {
        NONE: '',
        ADD: 'Add configuration provider - XML & PDF',
        EDIT: 'Edit configuration provider - XML & PDF',
        VIEW: 'View configuration provider - XML & PDF'
    }
    actionEnum = {
        NONE: 0,
        ADD: 1,
        EDIT: 2,
        VIEW: 3
    }
    messages = {
        SUCCESSFUL_OPERATION: 'Successful operation',
        ERROR: 'Error - please contact the administrator'
    }

    constructor(private modalService: BsModalService,
        private service: ConfigurationProviderService,
        private alert: ToastsManager,
        private container: ViewContainerRef) {
            alert.setRootViewContainerRef(container);
    }

    ngOnInit() {
        this.findAll();
    }

    openModal(template: TemplateRef<any>, action: number, selectedConfProvider?: ConfigurationProvider) {
        this.actionSelected = action;
        this.modalConfProvider = this.modalService.show(template);

        if (this.actionSelected === this.actionEnum.ADD)
            this.reset();
        else if (this.actionSelected === this.actionEnum.EDIT)
            this.setFields(selectedConfProvider);
        else
            this.reset();
    }

    setFields(row: any): void {               
        this.configurationProvider = Object.assign({}, row);
        this.tagID = Object.assign({}, row.tagID);
        this.tagIN = Object.assign({}, row.tagIN);
        this.tagTA = Object.assign({}, row.tagTA);
    }

    reset(): void {
        this.configurationProvider = new ConfigurationProvider(0, null, null);
        this.tagIN = new ConfigurationTag(0, TagEnum.INVOICE_NUMBER, null);
        this.tagTA = new ConfigurationTag(0, TagEnum.TOTAL_AMOUNT, null);
        this.tagID = new ConfigurationTag(0, TagEnum.ISSUE_DATE, null);
    }

    getPlainObject(): void {
        this.configurationProvider.Tags = [];
        this.configurationProvider.Tags.push(this.tagID);
        this.configurationProvider.Tags.push(this.tagIN);
        this.configurationProvider.Tags.push(this.tagTA);
    }

    findAll(): void {
        this.service.findAll()
            .subscribe(
                response => {              
                    this.configurationsProvider = response.data;
                },
                error => {
                    this.alert.error(this.messages.ERROR);
                }
            );
    }

    add(): void {
        this.getPlainObject();
        this.service.add(this.configurationProvider)
            .subscribe(
                response => {
                    if (response.success) {
                        this.findAll();
                        this.modalConfProvider.hide();
                        this.alert.success(this.messages.SUCCESSFUL_OPERATION);
                    } else {
                        this.alert.warning(response.msg);
                    }
                },
                error => {
                    this.alert.error(this.messages.ERROR);
                }
            );
    }

    onSubmit(): void {
        this.add();
    }
}