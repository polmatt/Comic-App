import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/service/heroes.service';
import { Heroe } from 'src/app/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{

  heroe:any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
      this.activatedRoute.params.subscribe(params => {
        /* console.log(params ['id']); */
        this.heroe = this._heroesService.getHeroe(params ['id']);
        console.log(this.heroe)
      });
   }



}
