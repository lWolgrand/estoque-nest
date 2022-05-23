import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { dbproviders } from "./database.providers";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [...dbproviders],
  exports: [...dbproviders],
})
export class DatabaseModule {}
