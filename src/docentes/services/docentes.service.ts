import { Body, Injectable } from '@nestjs/common';
import { Docente } from 'src/repository/entities/docente.entity';
import { arrayBuffer } from 'stream/consumers';

@Injectable()
export class DocentesService {
//listaNombresDocentes: string[]=['Fenoglio Fabrizio','Fenoglio Nicolas','Frozoni Facundo',];
  listaDocentes: Docente[]=[
    {
      dni: 41059317,
      apellidos: "Gomez Villagra",
      nombres: "Lucas Ivan",
      direccion: "Estrecho San Carlos 781",
      mail:"lucaasivangomez@gmail.com",
      celular: 3813407386,
  },
  {
      dni: 41059319,
      apellidos: "Ulrich",
      nombres: "Solana Belen",
      direccion: "EE.UU",
      mail:"sol-eeuu@gmail.com",
      celular: 12331231245,
  },
  {
      dni: 41059350,
      apellidos: "Frozono",
      nombres: "Fack",
      direccion: "La camino del Peru 450",
      mail:"fack-frozen@gmail.com",
      celular: 3814406696,
  },
  {
      dni: 41059327,
      apellidos: "fenoglio",
      nombres: "Fabrizio",
      direccion: "La Alderete",
      mail:"alderetes.feno@gmail.com",
      celular: 29034092,
  },
  {    dni: 1795022,
      apellidos: "Vergara",
      nombres: "Luis Imanol",
      direccion: "Puerto argentino 4532",
      mail:"GVimanol@gmail.com",
      celular: 3813456234,
  },
  {
      dni: 17589325,
      apellidos: "Urlingam",
      nombres: "Juan Carlos",
      direccion: "Pedro Pablo 2231",
      mail:"pedritocarpintere@gmail.com",
      celular: 23322145,
  },
  {
      dni: 41059350,
      apellidos: "French",
      nombres: "Frack",
      direccion: "El camino del Peru 450",
      mail:"frack-french@gmail.com",
      celular: 34256678,
  },
  {
      dni: 7690675,
      apellidos: "Villagra",
      nombres: "Hector Orlando",
      direccion: "Congreso 541",
      mail:"paco-villagra@gmail.com",
      celular: 34232356,
    }
    
  ]

  getDocente(dni:number): Docente{
    let cantidadDeDocentes=this.listaDocentes.length;
    let encontrado:Docente;
    for (let i=0;  i<cantidadDeDocentes; i++){
        if(this.listaDocentes[i].dni===dni){
            encontrado=this.listaDocentes[i];
        }
    };
    return encontrado;
  }
  getDocentes(): Docente[] {
    return this.listaDocentes;
  }
  createDocente(body){
    console.log(body);
    this.listaDocentes.push(body);
  }
  deleteDocente(dniDoc:number){
    this.listaDocentes = this.listaDocentes.filter(docente => docente.dni !== dniDoc)
  }
}