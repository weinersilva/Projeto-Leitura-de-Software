import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { PostagemModule } from './postagem/postagem.module';

export const firebaseConfig = {
  apiKey: 'AIzaSyDUWcx9mERvs6nEGrZnXWCl8N4ch_tfgew',
  authDomain: 'blog-leitura-de-software.firebaseapp.com',
  databaseURL: 'https://blog-leitura-de-software.firebaseio.com',
  projectId: 'blog-leitura-de-software',
  storageBucket: 'blog-leitura-de-software.appspot.com',
  messagingSenderId: '584117582853'
};

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    LoginModule,
    UserModule,
    PostagemModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  exports: [AngularFireModule, AngularFirestoreModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
