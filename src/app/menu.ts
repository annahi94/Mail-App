import { Header } from "./header";

export class Menu {    
    routerLink: string;
    title: string;
    header: Header;
    parent: boolean;
    childs: Menu[];

    constructor(routerLink: string, title: string, header: Header, parent: boolean, childs: Menu[]){
        this.routerLink = routerLink;
        this.title = title;
        this.header = header;
        this.parent = parent;
        this.childs = childs;
    }
}

