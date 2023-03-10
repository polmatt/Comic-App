import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/service/heroes.service';
import { Heroe } from 'src/app/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:any[] = [];


  constructor( private _heroesService: HeroesService,
               private router:Router) {


    //console.log("constructor");
   }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes()
    /* console.log(this.heroes) */
  }

  verHeroe(idx: number){
    this.router.navigate(['/heroe', idx])
  }

}
