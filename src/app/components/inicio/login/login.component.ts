import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUsuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private loginSv: AuthService,
    private router: Router
    
  ) { 
    this.login=this.fb.group({
      nombreUsuario:['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  inLogin(form:IUsuario){
    console.log(this.login)
    this.loginSv.loginUser(form).subscribe({
      next: (data:any) => {
        this.loginSv.setLocalStorage(data.tokenString);
        this.router.navigate(['/dashboardx']);
      },
      error: (matchError:any) =>{
        this.showError("Usuario o password incorrecta");
      }
    });
   
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');

  }
  showError(message: string) {
    this.toastr.error(message);

  }
}
