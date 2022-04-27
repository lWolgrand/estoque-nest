/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { DevicesService } from './devices.service';

@Controller('devices')
export class DevicesController {

  constructor(private readonly deviceService: DevicesService){} 

  @Get()  
  getAll() {
    return this.deviceService.getAll();
  }

  @Get(':id')
  getById(@Param() params){
    return this.deviceService.getById(+params.id);
  }

  @Post()
  create(@Body() device){
    return this.deviceService.create(device);
  }

  @Patch(':id')
  update(@Param() params, @Body() device){
    return this.deviceService.update(+params.id, device);
  }

  @Patch(':id')
  delete(@Param() params){
    return this.deviceService.delete(+params.id);
  }
}
