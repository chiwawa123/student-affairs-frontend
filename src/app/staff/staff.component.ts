import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  constructor(private router:Router){
    
  }
  click(){
    this.router.navigate(['home']).then(()=>{
      window.location.reload();
    })
  }

}
