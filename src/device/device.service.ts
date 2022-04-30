import { Injectable, Inject } from "@nestjs/common";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { UpdateDeviceDto } from "./dto/update-device.dto";
import { Device } from "./entities/device.entity";

@Injectable()
export class DeviceService {
  constructor(
    @Inject("DeviceRepository")
    private readonly deviceRepository: typeof Device
  ) { }
  async findAll(): Promise<Device[]> {
    return this.deviceRepository.findAll<Device>();
  }
  create(createDeviceDto: CreateDeviceDto) {
    return "This action adds a new device";
  }
  findOne(id: number) {
    return `This action returns a #${id} device`;
  }

  update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return `This action updates a #${id} device`;
  }

  remove(id: number) {
    return `This action removes a #${id} device`;
  }
}
