import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DataModule } from 'src/data/data.module';

@Module({
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
