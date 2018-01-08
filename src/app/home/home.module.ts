import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/* shared代替picture text */
// import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';
import { PictureComponent } from './picture/picture.component';
import { TextComponent } from './text/text.component';

@NgModule({
    declarations: [
        HomeComponent,
        PictureComponent,
        TextComponent
    ],
    imports: [
        // SharedModule,
        RouterModule.forChild(homeRoutes)
    ],
    providers: [],
    bootstrap: []
})
export class HomeModule { }
