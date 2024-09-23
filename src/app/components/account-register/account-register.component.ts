import { CadastroConta } from './../../models/cadastroConta.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.scss']
})
export class AccountRegisterComponent implements OnInit {
  cadastroForm!: FormGroup;
  cadastroConta! : CadastroConta
  constructor(private fb: FormBuilder){}

  hasError(field: string, error: string): boolean {
    const control = this.cadastroForm.get(field);
    return!! (control?.hasError(error) && control.touched);
  }
  getErrorMessage(field: string): string | null {
    if (this.hasError(field, 'required')) {
      return 'Campo obrigatório.';
    } else if (this.hasError(field, 'minlength')) {
      return `Insira no mínimo ${this.cadastroForm.get(field)?.errors?.minlength.requiredLength} caracteres.`;
    } else if (this.hasError(field, 'maxlength')) {
      return `Insira no máximo ${this.cadastroForm.get(field)?.errors?.maxlength.requiredLength} caracteres.`;
    } else if (this.hasError(field, 'pattern')) {
      return 'Formato inválido.';
    }
    else if (this.hasError(field, 'email')){
      return 'Email inválido'
    }
    return null;
  }
  getClass(field: string): string {
    const control = this.cadastroForm.get(field);
    return control?.errors && control.touched ? 'alert alert-danger' : '';
  }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      numeroConta: ['',Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12),
        Validators.pattern(/^\d{1,13}$/)
      ])],
      nome: ['',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(40),
        Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*(-[A-Za-zÀ-ÖØ-öø-ÿ]+)?$/)
      ])],
      documento:['',Validators.compose([
        Validators.required,
        Validators.pattern(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/)

      ])],
      dataDeNascimento:['',Validators.compose([
        Validators.required,
        Validators.pattern(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/)

      ])],
      email:['',Validators.compose([
        Validators.required,
        Validators.email
      ])],
      telefone:['',Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])],
      endereco:['',Validators.required]
    })
  }
  onSubmit(){
    if (this.cadastroForm.valid){
      this.cadastroConta = {
        numeroConta: this.cadastroForm.get('numeroConta')?.value,
        nome: this.cadastroForm.get('nome')?.value,
        documento: this.cadastroForm.get('documento')?.value,
        dataDeNascimento: this.cadastroForm.get('dataDeNascimento')?.value,
        email: this.cadastroForm.get('email')?.value,
        telefone: this.cadastroForm.get('telefone')?.value,
        endereco: {
          rua: 'Rua Exemplo',
          numero: 123,
          bairro: 'Centro',
          cidade: 'São Paulo',
          estado: 'SP',
          cep: '00000-000',
        },
      }
      console.log(this.cadastroConta);

      const teste = JSON.stringify(this.cadastroConta)

      console.log(`Formulario enviado ${teste}`)
    }
  }
}
