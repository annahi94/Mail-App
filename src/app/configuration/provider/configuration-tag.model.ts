import { TagEnum } from "./tag-enum.model";

export class ConfigurationTag {
    Id?: number;
    Tag?: TagEnum;
    Value?: string;

    constructor(id?: number, tag?: TagEnum, value?: string) { 
        this.Id = id;
        this.Tag = tag;
        this.Value = value;
    }
}