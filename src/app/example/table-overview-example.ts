import {
  AfterViewInit,
  OnInit,
  Component,
  ViewChild,
  Input,
  HostBinding,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';

export interface UserData {
  time: string;
  name: string;
  progress: string;
  schlagwort: string;
  type: 'documents';
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  '/Vertrag/Objekt Lieferant/Rechnung',
  '/Allgemein/Schriftverkehr',
  '/43533433/1/Unterlagen/Sonstiges Unterlagen',
  '/Vertrag/Unterlagen/Zahlungsauftrag',
  '/Vertrag/Unterlagen/Vertragsabrechnung',
];
const NAMES: string[] = [
  'Mietkauf',
  'Leasing',
  'Übernahmebestätigung',
  'Gesamtübersicht nach Abrechnung',
  'Abrechnung/Mietkaufvertrag/01/2012 Zahlungsplan',
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'table-overview-example',
  styleUrls: ['table-overview-example.scss'],
  templateUrl: 'table-overview-example.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    TextFieldModule,
    MatSelectModule,
  ],
})
export class TableOverviewExample implements OnInit, AfterViewInit {
  displayedColumns: string[];
  dataSource: MatTableDataSource<UserData>;

  @Input() editable = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @HostBinding('class.editable') get editableClass() {
    return this.editable;
  }

  constructor() {
    // Create 100 users
    let time = Date.now();
    const users = Array.from({ length: 100 }, (_, k) => {
      time -= Math.round(Math.random() * 86400000 * 3);
      return createNewUser(k + 1, time);
    });

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.displayedColumns = this.editable
      ? ['type', 'name', 'vertrag', 'schlagwort']
      : ['type', 'name', 'schlagwort', 'time'];
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getBeforeLastSlash(str: string) {
    return str.slice(0, str.lastIndexOf('/') + 1);
  }
  getAfterLastSlash(str: string) {
    return str.slice(str.lastIndexOf('/') + 1);
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number, time: number): UserData {
  let name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];

  const counter = Math.round(Math.random() * 6);
  if (counter > 1) {
    name += ' (' + counter.toString() + ')';
  }

  return {
    time: time.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    schlagwort: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    type: 'documents',
  };
}
