import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/models/usuario';
import { UsuarioM } from 'src/app/models/UsuarioM';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:FormGroup;
  constructor(
    private fb:FormBuilder,
    private apiUserSvc:UsuarioService,
    private toastr: ToastrService,
    private router:Router
  ) {this.register =this.fb.group({
      usuario:['', Validators.required],
      password:['', Validators.required],
      confirPassword:['', Validators.required]
  },{validator:this.checkPassword}) };

  ngOnInit(): void {
  }
  inRegister(form:IUsuario): void{
   
     const usuario: UsuarioM = {
       nombreUsuario:this.register.value.usuario,
       password:this.register.value.password
      }

    this.apiUserSvc.saveUser(usuario).subscribe({
      next:(data:any)=>{
        this.showSuccess(data.response.message);
        console.log("data",data);
      },
      error: err =>{
        this.showSuccess(err.error.menssage);
        console.log("el error",err);
      }
    })
    console.log(this.register);
    this.register.reset();
    //this.router.navigate(['/inicio/login']);
  }
  checkPassword(group: FormGroup):any{
    const password = group.controls['password'].value;
    const confirmpassword = group.controls['confirPassword'].value;
    return  password === confirmpassword ? null : {notSame:true}
    
  }
  showSuccess( message: string) {
    this.toastr.success(message, 'Notificación!');
  }
}
