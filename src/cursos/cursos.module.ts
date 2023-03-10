import { Module } from '@nestjs/common';
import { CursosController } from './controllers/cursos.controller';
import { CursosService } from './services/cursos.service';

@Module({
  imports: [],
  controllers: [CursosController],
  providers: [CursosService],
})
export class CursosModule {}