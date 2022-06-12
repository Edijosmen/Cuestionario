import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';

@Component({  
  selector: 'app-nueva-pregunta',
  templateUrl: './nueva-pregunta.component.html',
  styleUrls: ['./nueva-pregunta.component.css']
})
export class NuevaPreguntaComponent implements OnInit {
  nuevaPregunta:FormGroup;
  pregunta:Pregunta[]=[];
  rtaCorrecta=0;
  @Output() enviarPregunta = new EventEmitter<Pregunta>();
  constructor(
    private fb:FormBuilder,
    private toastr: ToastrService,
  ) {
    this.nuevaPregunta= this.fb.group({
      titulo:['', Validators.required],
      respuesta: this.fb.array([])
    });
   }

  ngOnInit(): void {
    this.respuestasPorDefeault();
  }

  get getRespuestas():FormArray {
    return this.nuevaPregunta.get('respuesta') as FormArray;
  }

  agregarRespuestas():void{
    this.getRespuestas.push(this.fb.group({
      descripcion:['', Validators.required],
      esCorrecta: 0
    }));
  }

  respuestasPorDefeault():void {
    this.agregarRespuestas();
    this.agregarRespuestas();
  }
  eliminarRespuesta(index:number):void {
    if(this.getRespuestas.length==2){
      this.toastr.error("como minimo debe contener dos respuestas","Advertencia!");
    }else{
      this.getRespuestas.removeAt(index);
    }
  }

  setRespuestaValidad(index:number):void {
    this.rtaCorrecta = index;
    console.log(this.rtaCorrecta);
  }

  agregarPregunta(): void {
    const descripcion = this.nuevaPregunta.controls['titulo'].value;
    const arrayRespuestas:any[] = this.nuevaPregunta.controls['respuesta'].value;
    const arrayRta:Respuesta[]=[];
    arrayRespuestas.forEach((element,index ) => {
      const respuestas:Respuesta = new Respuesta(element.descripcion,false);
      if(index === this.rtaCorrecta){
        respuestas.esCorrecta=true;
      }
      console.log("index",index);
      arrayRta.push(respuestas);
    });
    const pregunta:Pregunta = new Pregunta(descripcion,arrayRta);
    this.enviarPregunta.emit(pregunta);
     console.log("new",this.nuevaPregunta);
     console.log("arrayRespuestas",arrayRespuestas);
     console.log("respuesta",pregunta);
     this.reset();
  }

  reset(): void{
    this.nuevaPregunta.reset();
    this.getRespuestas.clear();
    this.respuestasPorDefeault();
    this.rtaCorrecta=0;
  }
}
