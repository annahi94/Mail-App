export class Header {
    id: number;
    title: string;
    logoPath: string;

    constructor(id: number, title: string, logoPath: string) {
        this.id = id;
        this.title = title;
        this.logoPath = logoPath;
    }
}