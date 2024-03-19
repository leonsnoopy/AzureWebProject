import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzEmptyModule } from 'ng-zorro-antd/empty';


import { NotFoundComponent } from './not-found/not-found.component';
import { GamesComponent } from './games/games.component';
import { LabsComponent } from './labs/labs.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    NzInputModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzSelectModule,
    NzDescriptionsModule,
    NzGridModule,
    NzImageModule,
    NzTabsModule,
    NzCardModule,
    NzCollapseModule,
    NzEmptyModule,
  ],
  declarations: [
    NotFoundComponent,
    GamesComponent,
    LabsComponent,
    WelcomeComponent
  ]
})
export class HomePageModules {}


