import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
  .setTitle('Documentação com Swagger - Estoque Plataforma')
  .setDescription(
    'Documentação da API de Estoque Plataforma - Desenvolvido com NestJS e TypeScript com o framework Swagger 2.0',
  )
  .setVersion('1.0')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
    
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
