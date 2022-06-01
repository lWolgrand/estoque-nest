import { Controller, Get, Post, Body, Patch, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { DevicesService } from "./devices.service";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { CreateInvoiceDto } from "./dto/create-invoice.dto";
import { CreateLocationDto } from "./dto/create-location.dto";
import { UpdateDeviceDto } from "./dto/update-device.dto";

@ApiTags('devices')
@Controller("devices")
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.devicesService.create(createDeviceDto);
  }

  @Get()
  findAll() {
    return this.devicesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.devicesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDeviceDto: UpdateDeviceDto) {
    return this.devicesService.update(+id, updateDeviceDto);
  }

  @Post(":id/location")
  createLocation(
    @Param("id") id: string,
    @Body() createLocationDto: CreateLocationDto
  ) {
    return this.devicesService.createLocation(+id, createLocationDto);
  }

  @Get(":id/invoices")
  findInvoice(@Param("id") id: string) {
    return this.devicesService.findOneInvoice(+id);
  }

  @Post(":id/invoices")
  createInvoice(
    @Param("id") id: string,
    @Body() createInvoiceDto: CreateInvoiceDto
  ) {
    return this.devicesService.createInvoice(+id, createInvoiceDto);
  }
}
