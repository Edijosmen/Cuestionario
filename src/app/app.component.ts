import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';

  peoples: any[]=[
    {nombre:"edinson",apellido:"meneses",edad:20},
    {nombre:"carlos",apellido:"Jurado",edad:30},
    {nombre:"Kelium",apellido:"Jojoa",edad:22}
  ]
}
