import { NestFactory } from "@nestjs/core";
import { DevicesModule } from "./devices/devices.module";
import * as dotenv from "dotenv";
import { Status } from "./devices/entities/status.entity";
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(DevicesModule);
  await app.listen(process.env.PORT);
}

bootstrap();
