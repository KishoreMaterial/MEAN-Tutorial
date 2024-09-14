import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpRoutingService } from 'src/app/shared/services/http-routing.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentListComponent {
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Output() val=new EventEmitter<any>();
  @Input() data: any;
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id','name', 'age', 'actions'];

  constructor(
    private httpService: HttpRoutingService,
    private router: Router,
    private pagiDemo: MatPaginatorIntl,
    private changeDetector:ChangeDetectorRef

  ) { 
    // this.pagiDemo.itemsPerPageLabel = "Sample name 1";
  }
  
  ngOnInit() {
    
    this.httpService.getStudentDetails().subscribe((res: any) => {
      if (!res) {
        console.log("No data found");
      } else {
        this.dataSource = new MatTableDataSource(res);
        console.log("datasorce: ",this.dataSource);
        
        console.log(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }
  
  
  ngAfterViewInit() {
  

  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  onEdit(id: any) {
    console.log("event: ",id);
    
    this.router.navigate(['/add-list',id]);
  }
  
  ngOnChanges() {
    console.log("on change")
    // this.pagiDemo.itemsPerPageLabel = "Sample name 1";

    // this.pagiDemo.itemsPerPageLabel = "Sample name 1";
    // this.changeDetector.detectChanges();

  }
  
  onDel() {
    this.pagiDemo.itemsPerPageLabel = "Sample name 1";
    // this.changeDetector.markForCheck();
    this.paginator.page.emit();
    // this.val.emit();
    console.log("callin gdel");
    
  }
}
