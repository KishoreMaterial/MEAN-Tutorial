import { ChangeDetectionStrategy, ChangeDetectorRef, Component, SimpleChange } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { HttpRoutingService } from 'src/app/shared/services/http-routing.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddDetailsComponent {

  constructor(
    private httpService: HttpRoutingService,
    private route: ActivatedRoute,
    private pagiDemo: MatPaginatorIntl,
    private changedetect:ChangeDetectorRef
  ) { 
    this.pagiDemo.itemsPerPageLabel = "calling onchanges";

  }

  myGroup!: FormGroup;
  demo1 = 1;
  showPaginator: boolean = true;
  ngOnInit() {
    // this.ngOnChanges()
    
    console.log("caling ngoninit");
    
    // this.pagiDemo.itemsPerPageLabel = "Sample name"
    if (this.route.params) {
      var currentUser = this.route.params.subscribe((res) => {
        console.log("res",res);
        this.httpService
      });
      console.log("currentUser: ",currentUser);

    }
    
    this.formInitilization();
  }

  formInitilization() {
    this.myGroup = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      age: new FormControl(null),
      degree: new FormControl(null),
      address: new FormControl(null),
    });
  }

  onRest() {
    console.log("clicking reset");

    this.myGroup.reset();
  }


  onSubmit() {

    if (this.myGroup.valid) {
      console.log("mygrop value : ",this.myGroup.value);
      
      this.httpService.addStudentDetails(this.myGroup.value).subscribe((res) => {
        if (!res) {
          alert("Something went wrong")
        } else {
          alert(`Data added successfully: ${res.toString()}`)
          
        }
      })
    }

  }

  demo() {
    this.showPaginator = false;
    setTimeout(() => {
      this.showPaginator = true;
      console.log('timeout');
      this.ngOnChanges();
    },500)
  }

  ngOnChanges() {
    console.log("callling onchanfe");
    
    this.pagiDemo.itemsPerPageLabel = "calling onchanges1";
    this.showPaginator = true;

    this.changedetect.markForCheck();
    console.log(this.pagiDemo.itemsPerPageLabel);
    
  }

}
