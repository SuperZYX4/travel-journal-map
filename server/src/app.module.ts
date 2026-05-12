import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { FootprintsModule } from '@/footprints/footprints.module';

@Module({
  imports: [FootprintsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
