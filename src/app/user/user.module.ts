import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';
import { TranslateModule } from '@ngx-translate/core';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, UserRoutingModule],
  declarations: [ProfileComponent]
})
export class UserModule {}
