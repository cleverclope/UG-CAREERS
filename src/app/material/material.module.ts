import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';

// Imported Material Components
const materialComponents = [
  CommonModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  MatTooltipModule,
  MatCardModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule,
  MatSidenavModule,
  MatExpansionModule,
  MatDividerModule,
  MatBadgeModule,
  MatTabsModule,
  MatSelectModule,
  MatDialogModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatDatepickerModule,
  MatStepperModule,
  MatToolbarModule,
]
@NgModule({
  declarations: [

  ],
  imports: [materialComponents],
  exports: [materialComponents],
})
export class MaterialModule { }
