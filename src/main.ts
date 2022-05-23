import { NestFactory } from "@nestjs/core";
import { DevicesModule } from "./devices/devices.module";
import * as dotenv from "dotenv";
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(DevicesModule);
  await app.listen(process.env.PORT);
}

bootstrap();
