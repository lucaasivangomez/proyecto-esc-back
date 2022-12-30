import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DocentesService } from './../services/docentes.service';

@Controller('docentes')
export class DocentesController {
  constructor(private readonly docentesService: DocentesService) {}

  @Get("")
  getDocentesEndPoint(){
    return this.docentesService.getDocentes();
  }
  @Get(':dni')
  getDocenteEndPoint(@Param('dni') dni:number){
    return this.docentesService.getDocente(dni);
  }
  @Post()
  createDocente(@Body() body){
    this.docentesService.createDocente(body);
  }
  @Delete(':dni')
  deleteDocenteEndPoint(@Param('dni') dni:number){
    this.docentesService.deleteDocente(dni);
  }
}