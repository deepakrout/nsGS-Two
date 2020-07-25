import { Component,Input } from "@angular/core";
import { ItemEventData } from "tns-core-modules/ui/list-view";

@Component({
    selector: 'dk-current-challange',
    templateUrl: './current-challange.component.html',
    styleUrls: ['./current-challange.component.css'],
    moduleId: module.id
})
export class CurrentChallangeComponent {
    @Input() challanges: string[] = []

    onItemTap(args: ItemEventData) {
        console.log(args)
    }
    
}