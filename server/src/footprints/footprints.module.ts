import { Module } from '@nestjs/common'
import { FootprintsController } from './footprints.controller'

@Module({
  controllers: [FootprintsController]
})
export class FootprintsModule {}
