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
import { SlDocuments } from '../model/document-model';

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
  dataSource: MatTableDataSource<SlDocuments>;

  @Input() editable = false;
  @Input() showAddButton = false;
  @Input() showSearchField = false;
  @Input() showPagination = false;
  @Input() showTableHeader = false;
  @Input() limit: number;
  @Input() data: SlDocuments[];

  get showToolbar() {
    return this.showPagination || this.showAddButton;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @HostBinding('class.editable') get editableClass() {
    return this.editable;
  }
  @HostBinding('class.show-table-header') get tableHeaderClass() {
    return this.showTableHeader;
  }

  constructor() {}

  ngOnInit() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.data);

    this.displayedColumns = this.editable
      ? ['type', 'name', 'schlagwort', 'vertrag']
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
