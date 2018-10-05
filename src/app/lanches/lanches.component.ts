import { Component, OnInit } from '@angular/core';

import { Lanche } from './lanche';
import { LanchesService } from './lanches.service';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.component.html',
  providers: [ LanchesService ],
  styleUrls: ['./lanches.component.css']
})
export class LanchesComponent implements OnInit {

  lanches: Lanche[];

  constructor(private lanchesService: LanchesService) { }

  ngOnInit() {
    this.getLanches();
  }

  getLanches(): void {
    this.lanchesService.getLanches()
      .subscribe(lanches => this.lanches = lanches);
  }

}
