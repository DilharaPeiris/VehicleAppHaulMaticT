import { Component,OnInit } from '@angular/core';
import { VehicleVM } from './shared/vehicelVM';
import { VehicleServices } from './shared/vehicleServices';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'vehicleApp';

  public vehicleVM: VehicleVM={};
  public orgid: string;
  public vehicleDetailsList : VehicleVM[]=[];

  constructor(public vehicleServices : VehicleServices){

  }

  ngOnInit() { 

  }

  addVehicleRecord(){

    let request = {
      vehicleVM: this.vehicleVM
    }

    this.vehicleServices.insertNewVehicleRecord(request).subscribe(
      data=>{
        console.log(data);
        if(data.isSuccess){
          console.log("Successfully Record Inserted")
        }
        else{
          console.log(data.error);
          
        }
      }
    );
  }

  viewData(){
    this.vehicleServices.getVehicleDetails(this.orgid).subscribe(
     data =>{
       this.vehicleDetailsList=data.vehicleVM;
      this.vehicleVM=this.vehicleDetailsList[0];

     }
     
    );
  }


}

