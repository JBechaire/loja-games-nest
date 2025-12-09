import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'loja_games',
      entities: [],
      synchronize: true,
    }),
    //  lembrar --Other module imports can be added here
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}