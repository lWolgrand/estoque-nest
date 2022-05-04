import { NestFactory } from "@nestjs/core";
import { DevicesController } from "./devices/devices.controller";
import { DevicesModule } from "./devices/devices.module";

async function bootstrap() {
  const app = await NestFactory.create(DevicesModule);
  await app.listen(3000);
}

bootstrap();
