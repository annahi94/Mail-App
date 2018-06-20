import { ConfigurationTag } from "./configuration-tag.model";
import { ConfigurationProviderComponent } from "./provider-conf.component";

export class ConfigurationProvider {
    Id?: number;
    Cnpj?: string;
    Tags?: Array<ConfigurationTag>;

    constructor(id?: number, cnpj?: string, tags?: Array<ConfigurationTag>) {
        this.Id = id;
        this.Cnpj = cnpj;
        this.Tags = tags;
    }
}