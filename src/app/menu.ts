import { Header } from "./header";

export class Menu {
    id: number;
    routerLink: string;
    title: string;
    header: Header;

    constructor(id: number, routerLink: string, title: string, header: Header){
        this.id = id;
        this.routerLink = routerLink;
        this.title = title;
        this.header = header;
    }
}

