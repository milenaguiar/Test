import { ConsultaExtratoService } from './../../services/consulta-extrato.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaExtrato } from 'src/app/models/consultaExtrato.interface';

@Component({
  selector: 'app-consulta-extrato',
  templateUrl: './consulta-extrato.component.html',
  styleUrls: ['./consulta-extrato.component.scss']
})
export class ConsultaExtratoComponent implements OnInit {
  extratoForm! : FormGroup;
  numeroConta: string = '';
  extrato: ConsultaExtrato | null = null;
  buscaRealizada: boolean = false;

  constructor(
    private extratoService: ConsultaExtratoService,
    private fb :FormBuilder
  ){ }

  ngOnInit(): void {
    this.extratoForm = this.fb.group({
      numeroConta: ['',Validators.compose([
        Validators.required,
        Validators.pattern(/^\d{1,13}$/)
      ])]
    })
  }
  consultarExtrato() {
    if(this.numeroConta){
      this.buscaRealizada = true
      this.extratoService.pegaExtratoNumeroConta(this.numeroConta)
      .subscribe((data: ConsultaExtrato[])=>{
        if (data.length >0 ){
          this.extrato = data[0];
        }else {
          this.extrato = null;
        }
      }
    )};
  }
}
