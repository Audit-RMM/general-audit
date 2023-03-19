import {Component, Input, OnInit} from '@angular/core';
import {Infos} from "../question.model";

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export class RapportComponent implements OnInit {

  @Input()
  recomandations: string[] = [];
  @Input()
  score: number = 0;
  @Input()
  infos: Infos = new Infos();

  constructor() {
  }

  ngOnInit(): void {
    console.log('rapport : score')
    console.log(this.score)
  }

}
