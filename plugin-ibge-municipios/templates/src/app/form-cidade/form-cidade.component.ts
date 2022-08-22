import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Municipio } from './municipio';
import { MunicipiosService } from './municipios.service';

@Component({
  selector: 'app-form-cidade',
  templateUrl: './form-cidade.component.html',
  styleUrls: ['./form-cidade.component.css'],
})
export class FormCidadeComponent implements OnInit {
  municipios$: Observable<Municipio[]>;

  displayedColumns: string[] = ['id', 'descricao'];

  constructor(private service: MunicipiosService) {
    this.municipios$ = this.service.list();
  }

  ngOnInit(): void {
    console.log('chegou...');
  }
}
