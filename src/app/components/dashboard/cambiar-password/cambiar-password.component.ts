import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeUser } from 'src/app/models/change-user';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {
  changePassword:FormGroup;
  constructor(
    private fb:FormBuilder,
    private usuarioSvc:UsuarioService,
    private toastr:ToastrService,
    private router: Router
    ){
    this.changePassword= this.fb.group({
      passwordAfter:['',Validators.required],
      passwordNew:['',Validators.required],
      confirmPassword:['',Validators.required],
    },{validator:this.checkPassword});
   }

  ngOnInit(): void {
  }
  checkPassword(group: FormGroup):any{
    const passwordNew = group.controls['passwordNew'].value;
    const confirmPassword = group.controls['confirmPassword'].value;
    return  passwordNew === confirmPassword ? null : {notSame:true}
    
  }
  savePassword() {

    const user: ChangeUser={
      beforePassword: this.changePassword.value.passwordAfter,
      newPassword: this.changePassword.value.passwordNew,
      confirmPassword: this.changePassword.value.confirmPassword
    };

    this.usuarioSvc.changePassword(user).subscribe(data => {
      console.log("es data",data);
      this.router.navigate(['/dashboardx']);
      
    },error =>{
      this.toastr.error(error.error.message,"Notifiación!!")
      console.log("el error",error);
    });
    console.log(this.changePassword);
    console.log("holoaa");
  }
}
