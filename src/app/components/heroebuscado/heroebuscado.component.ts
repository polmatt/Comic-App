import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/service/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroebuscado',
  templateUrl: './heroebuscado.component.html'
})
export class HeroebuscadoComponent implements OnInit {

  heroes:any[] = []
  termino:string = '';

constructor(private activatedRoute: ActivatedRoute,
            private _heroesService: HeroesService,
            private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params ['termino'];
      this.heroes = this._heroesService.buscarHeroes(params ['termino']);
      console.log(this.heroes)
    });
  }

  verHeroe(idx: any){
    this.router.navigate(['/buscar', idx])
  }


}
