import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootroot',
      database: 'Aon',
      entities: [User],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
