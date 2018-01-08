import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
// import { MyPreloadingStrategy } from './common/my-preload';
// import { HomeComponent } from './home/home.component';
// import { JokesComponent } from './jokes/jokes.component';
import { ChineseMobileValidator } from './form-quick-start/directives/Chinese-mobile-validator.directive';
import { FormQuickStartComponent } from './form-quick-start/form-quick-start.component';

import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // JokesComponent
    ChineseMobileValidator,
    FormQuickStartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    // RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
    // RouterModule.forRoot(appRoutes, { preloadingStrategy: MyPreloadingStrategy })
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
