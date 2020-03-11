import {Component, Input} from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
@Component({
    selector : 'tables',
    templateUrl : './tables.component.html',
    styleUrls   : ['./tables.component.css']
})
export class Tables{
    @Input() input : number;
    @Input() visible : boolean;
    numbers = [1,2,3,4,5,6,7,8,9,10];
}