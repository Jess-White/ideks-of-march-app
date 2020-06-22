import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CipherComponent } from './components/cipher/cipher.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { ShowComponent } from './components/show/show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: 'create', component: CreateComponent},
  { path: 'show/:id', component: ShowComponent},
  { path: 'list', component: ListComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'cipher', component: CipherComponent},
  { path: '', redirectTo: 'cipher', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    CipherComponent,
    ListComponent,
    CreateComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
