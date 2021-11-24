import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { MenuComponent } from './components/menu/menu.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { VariablesComponent } from './components/variables/variables.component';
import { KpisComponent } from './components/kpis/kpis.component';
import { MasterDetailSkeletonComponent } from './components/master-detail-skeleton/master-detail-skeleton.component';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    MenuComponent,
    TutorialsComponent,
    VariablesComponent,
    KpisComponent,
    MasterDetailSkeletonComponent,
    SanitizeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
