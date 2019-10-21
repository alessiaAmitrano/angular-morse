import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { MomentModule } from 'angular2-moment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/containers/landing-page/landing-page.component';
import { InputTextPageComponent } from './components/containers/input-text-page/input-text-page.component';
import { ResultPageComponent } from './components/containers/result-page/result-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './utils/material-ui/material-ui.module';
import { InputFormComponent } from './components/ui/input-form/input-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MorseState } from './core/store';
import { environment } from 'src/environments/environment';
import { MorseItemComponent } from './components/ui/morse-item/morse-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    InputTextPageComponent,
    ResultPageComponent,
    InputFormComponent,
    MorseItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([MorseState], {
      developmentMode: !environment.production
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
    NgxsSelectSnapshotModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BrowserAnimationsModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgIdleKeepaliveModule.forRoot(),
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
