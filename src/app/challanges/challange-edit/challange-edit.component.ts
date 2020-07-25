import { Component, OnInit, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'dk-challange-edit',
    templateUrl: './challange-edit.component.html',
    styleUrls: ['./challange-edit.component.css'],
    moduleId: module.id
})
export class ChallangeEditComponent implements OnInit {
    @Output() input = new EventEmitter<string>()

    challangeDescription: string = ''

    constructor() {

    }

    ngOnInit(): void {
        
    }

    onSetChallange() {
        console.log(`On Set input fired`)
        this.input.emit(this.challangeDescription)
    }

}