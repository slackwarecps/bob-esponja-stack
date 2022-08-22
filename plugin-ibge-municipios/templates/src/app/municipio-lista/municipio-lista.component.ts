import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Municipio } from './municipio';
import { MunicipiosService } from './municipios.service';

@Component({
  selector: 'app-municipio-lista',
  templateUrl: './municipio-lista.component.html',
  styleUrls: ['./municipio-lista.component.css'],
})
export class MunicipioListaComponent implements OnInit {
  // municipios$: Observable<Municipio[]>;

  displayedColumns: string[] = ['id', 'descricao'];

  constructor(private service: MunicipiosService) {
    //this.municipios$ = this.service.list();
  }

  ngOnInit(): void {
    console.log('chegou...');
  }
}
