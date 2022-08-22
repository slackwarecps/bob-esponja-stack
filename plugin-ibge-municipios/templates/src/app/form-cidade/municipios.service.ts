import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Municipio } from './municipio';

@Injectable({
  providedIn: 'root',
})
export class MunicipiosService {
  API_URL =
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios';

  API_URLx = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios';

  constructor(private httpClient: HttpClient) {}

  list() {
    console.log('consultando municipios por estado');
    return this.httpClient
      .get<Municipio[]>(this.API_URL)
      .pipe(tap((municipios) => console.log(municipios)));
  }
}
