import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    activeChallanges: string[] = [];

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onChallangeInput(challangeDescription: string) {
        console.log(`onChallangeInput in AppComponent`)
        this.activeChallanges.push(challangeDescription)
    }
}
