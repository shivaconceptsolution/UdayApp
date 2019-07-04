import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { HttpClient,HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css']
})
export class SwapComponent implements OnInit {
  tid:string='';
  tdesc:string='';
  //httpdata;
 // searchparam = 2;
    constructor(private http: HttpClient) { }

  ngOnInit() {
  
   
  }
  addTruck () {

   let t = {'tno':this.tid,'tdet':this.tdesc};
  this.http.post("https://shivaconceptsolution.com/webservices/truck.php",t,httpOptions).subscribe((res)=>{
            console.log(res);
           
        });
        alert('data inserted');
}
login()
{
    let t = {'emailid':'jain.parul0210@gmail.com','pwd':'111'};
	this.http.post("https://shivaconceptsolution.com/webservices/login.php",t,httpOptions).subscribe((res)=>{
            console.log(res);
           
        });
        alert('data inserted');

}

}
