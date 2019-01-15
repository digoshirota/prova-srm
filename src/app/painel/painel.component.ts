import { Component, OnInit } from '@angular/core';
import { Painel } from '../painel';
import { PAINELS } from '../mock-painel';

import { Painel2 } from '../painel';
import { PAINELS2 } from '../mock-painel';

import { Painel3 } from '../painel';
import { PAINELS3 } from '../mock-painel';

import { Painel4 } from '../painel';
import { PAINELS4 } from '../mock-painel';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

	painels = PAINELS;
	painels2 = PAINELS2;
	painels3 = PAINELS3;
	painels4 = PAINELS4;

  constructor() { }

  ngOnInit() {
  }

}
