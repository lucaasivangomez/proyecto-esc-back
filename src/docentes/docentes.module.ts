import { Module } from '@nestjs/common';
import { DocentesController } from './controllers/docentes.controller';
import { DocentesService } from './services/docentes.service';

@Module({
  imports: [],
  controllers: [DocentesController],
  providers: [DocentesService],
})
export class DocentesModule {}
