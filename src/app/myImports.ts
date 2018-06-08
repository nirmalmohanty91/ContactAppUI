import { NgModule } from '@angular/core';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatButtonModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatTabsModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule} from '@angular/material/table';
import { CdkTableModule} from '@angular/cdk/table';
import { HttpClientModule} from '@angular/common/http';
import { MatPaginatorModule, MatSortModule} from '@angular/material';
import { MatIconModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@NgModule({
  exports: [
    MatProgressBarModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    CdkTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    HttpModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})
export class MyImports {}