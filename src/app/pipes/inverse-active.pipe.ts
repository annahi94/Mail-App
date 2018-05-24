import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'inverseActive' })
export class InverseActivePipe implements PipeTransform {
    transform(value: boolean): string {
        return value ? 'Deactivate' : 'Activated'
    }
}