import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursosModule } from './cursos/cursos.module';
import { DocentesModule } from './docentes/docentes.module';


@Module({
  imports: [DocentesModule,CursosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
