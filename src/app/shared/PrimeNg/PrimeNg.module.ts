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
import { ToastModule } from 'primeng/toast';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import {CardModule} from 'primeng/card';
import {FileUploadModule} from 'primeng/fileupload';
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
  ToastModule,
  MegaMenuModule,
  AvatarModule,
  AvatarGroupModule,
  PanelMenuModule,
  SlideMenuModule,
  ToolbarModule,
  MenubarModule,
  TagModule,
  ConfirmPopupModule,
  DialogModule,
  CardModule,
  FileUploadModule
];

@NgModule({
  exports: [PrimeNgComponent],
})
export class PrimeNgModule {}
