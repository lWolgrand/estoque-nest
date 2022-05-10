import { Inject, Injectable } from "@nestjs/common";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { UpdateDeviceDto } from "./dto/update-device.dto";
import { Device } from "./entities/device.entity";

@Injectable()
export class DevicesService {
  constructor(
    @Inject("DEVICE_REPOSITORY")
    private readonly deviceRepository: typeof Device
  ) { }

  async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    return await this.deviceRepository.create<Device>(createDeviceDto);
  }

  async findAll() {
    return await this.deviceRepository.findAll<Device>();
  }

  async findOne(id: number) {
    return await this.deviceRepository.findOne<Device>({ where: { id } });
  }

  async update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return await this.deviceRepository.update<Device>(updateDeviceDto, {
      where: { id },
    });
  }
}
