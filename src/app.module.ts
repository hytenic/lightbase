import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { DbController } from './db/db.controller';
import { DbModule } from './db/db.module';

@Module({
  imports: [UserModule, DbModule],
  controllers: [AppController, UserController, DbController],
  providers: [AppService, UserService],
})
export class AppModule {}
