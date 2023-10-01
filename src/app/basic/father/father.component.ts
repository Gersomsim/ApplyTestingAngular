import { Component } from '@angular/core';
import {Client} from "../interfaces/client.interface";

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent {
  client?: Client;

  onSetClient(name: string) {
    this.client = { name, id: 1}
  }
}
