import { Component, OnInit } from '@angular/core';

import { Lanche } from '../lanche/lanche';
import { LancheService } from '../lanche/lanche.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [ LancheService ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lanches: Lanche[];

  constructor(private lancheService: LancheService) { }

  ngOnInit() {
    this.getLanches();
  }

  getLanches() : void {
    this.lancheService.getLanches()
      .subscribe(lanches => this.lanches = lanches);
  }

}
