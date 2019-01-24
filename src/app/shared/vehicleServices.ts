import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleRecordResponse } from './vehicleRecordResponse';

@Injectable()
export class VehicleServices{

    // path: string = "";      

    constructor(private _http: HttpClient){
    }

    insertNewVehicleRecord(body:any):Observable<any>{
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>', body);
        return this._http.post<any>('http://ec2-13-126-31-178.ap-south-1.compute.amazonaws.com:17114/api/org/vehicle',body);
    }

    getVehicleDetails(orgid:string):Observable<VehicleRecordResponse>{
        return this._http.get<VehicleRecordResponse>('http://ec2-13-126-31-178.ap-south-1.compute.amazonaws.com:17114/api/org/vehicle/orgid/' 
        + orgid);
    }


}