import { Component, Input } from "@angular/core";

@Component({
    selector: 'my-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.css',
    standalone: true
})

export class Button{
    @Input() label: string = ''

    getAlert() {
        window.alert(this.label)     
    }
}