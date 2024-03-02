import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sotopaguayj:KNqZfaUaoihHaWZu@cluster1.tv1td8n.mongodb.net/?retryWrites=true&w=majority&appName=cluster1',
    ),
    UsersModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
