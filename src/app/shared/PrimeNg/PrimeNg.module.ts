import { NgModule } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {ToastModule} from 'primeng/toast';
const PrimeNgComponent = [
  PasswordModule,
  DividerModule,
  ButtonModule,
  TableModule,
  InputTextModule,
  InputNumberModule,
  InputMaskModule,
  CheckboxModule,
  MessagesModule,
  MessageModule,
  ToastModule
];

@NgModule({
  exports: [PrimeNgComponent],
})
export class PrimeNgModule {}
