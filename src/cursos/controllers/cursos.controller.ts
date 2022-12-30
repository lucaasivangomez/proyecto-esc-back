import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CursosService } from "../services/cursos.service";

@Controller('cursos')
export class CursosController{
    constructor(private readonly cursosService: CursosService) {}

    @Get()
    getCursos(){
        return this.cursosService.getCursos();
    }
    @Get(':plazaId')
    getCurso(@Param('plazaId') plazaId:string){
        return this.cursosService.getCurso(plazaId);
    }
    @Post()
    createCurso(@Body() body){
        this.cursosService.createCurso(body);
    }
    @Delete(':plazaId')
    deleteCurso(@Param('plazaId') plazaId:string){
        return this.cursosService.deleteCursos(plazaId)
    }


}
