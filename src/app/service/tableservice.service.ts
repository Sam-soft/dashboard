import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Element} from '../table-dynamic-array-data-example/table-dynamic-array-data-example'

@Injectable({
  providedIn: 'root'
})
export class TableserviceService {

  data = new Subject<Element>()

  constructor() { }
}
