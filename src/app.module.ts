import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DataModule } from './data/data.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, DataModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
