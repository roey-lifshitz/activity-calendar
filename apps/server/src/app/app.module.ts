import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.DB_HOST || 'localhost',
    //   port: parseInt(process.env.DB_PORT) || 5432,
    //   username: process.env.DB_USERNAME || 'postgres',
    //   password: process.env.DB_PASSWORD || 'postgres',
    //   database: process.env.DB_NAME || 'auth_db',
    //   entities: [User],
    //   synchronize: true, // Set to false in production
    // }),
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available globally
      envFilePath: '.env', // Default is '.env', specify if using a different file
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
