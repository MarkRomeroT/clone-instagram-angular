import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './componentes/nav/nav.component';
import { HistoriasComponent } from './componentes/historias/historias.component';
import { PostComponent } from './componentes/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HistoriasComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
