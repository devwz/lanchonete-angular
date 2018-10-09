import { Component, OnInit } from '@angular/core';

import { Lanche } from './lanche';
import { LancheService } from './lanche.service';

@Component({
  selector: 'app-lanche',
  templateUrl: './lanche.component.html',
  providers: [ LancheService ],
  styleUrls: ['./lanche.component.css']
})
export class LancheComponent implements OnInit {

  lanches: Lanche[];

  constructor(private lancheService: LancheService) { }

  ngOnInit() {
    this.getLanches();
  }

  getLanches(): void {
    this.lancheService.getLanches()
      .subscribe(lanches => this.lanches = lanches);
  }

}
