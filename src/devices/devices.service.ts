import { Inject, Injectable } from "@nestjs/common";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { CreateInvoiceDto } from "./dto/create-invoice.dto";
import { CreateLocationDto } from "./dto/create-location.dto";
import { UpdateDeviceDto } from "./dto/update-device.dto";
import { Device } from "./entities/device.entity";
import { Invoice } from "./entities/invoice.entity";
import { Location } from "./entities/location.entity";

@Injectable()
export class DevicesService {
  constructor(
    @Inject("DEVICE_REPOSITORY")
    private readonly deviceRepository: typeof Device,
    @Inject("LOCATION_REPOSITORY")
    private readonly locationRepository: typeof Location,
    @Inject("INVOICE_REPOSITORY")
    private readonly invoiceRepository: typeof Invoice
  ) {}

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

  async createLocation(id: number, createLocationDto: CreateLocationDto) {
    const id_location = await this.locationRepository.create<Location>(
      createLocationDto
    );
    return await this.update(id, { id_location: id_location.id });
  }

  async createInvoice(id: number, createInvoiceDto: CreateInvoiceDto) {
    const id_invoice = await this.invoiceRepository.create<Invoice>(
      createInvoiceDto
    );
    return await this.update(id, { id_invoiceIn: id_invoice.id });
  }
  async findOneInvoice(id: number) {
    return await this.invoiceRepository.findOne<Invoice>({ where: { id } });
  }
}
