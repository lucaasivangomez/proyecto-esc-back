import { Injectable } from "@nestjs/common";
import { Curso } from "src/repository/entities/curso.entity";

@Injectable()
export class CursosService{
    listaCursos: Curso[]=[
        {
            plazaId: "2245",
            año: 1,
            division: 1,
            especialidad: "Ciclo Basico",
            turno:'TM',
        },
        {
            plazaId: "2246",
            año: 1,
            division: 2,
            especialidad: "Ciclo Basico",
            turno:'TM',
        },
        {
            plazaId: "0909",
            año: 3,
            division: 2,
            especialidad: "Programación 💻",
            turno:'TT',
        },
        {
            plazaId: "1212",
            año: 3,
            division: 3,
            especialidad: "Ciclo Basico",
            turno:'TV',
        },
        {
            plazaId: "6776",
            año: 7,
            division: 6,
            especialidad: "Electromecanica",
            turno:'TM',
        },
        {
            plazaId: "3456",
            año: 6,
            division: 1,
            especialidad: "Contador",
            turno:'TM',
        },
        {
            plazaId: "1290",
            año: 4,
            division: 7,
            especialidad: "Mecanica",
            turno:'TV',
        }
    ]
    getCursos(){
        return this.listaCursos;
    }
    getCurso(plazaId:string){
        return this.listaCursos.find(curso =>{
            return curso.plazaId === plazaId;
        })
    }
    getCursoByAño(año:number){
        return this.listaCursos.filter(curso =>{
            return curso.año === año;
        })
    }
    createCurso(body:Curso){
        console.log(body);
        this.listaCursos.push(body);
    }
    deleteCursos(plazaId:string){
        this.listaCursos = this.listaCursos.filter(curso => curso.plazaId !== plazaId)
    }
}