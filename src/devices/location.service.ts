import { Inject, Injectable } from "@nestjs/common";
import { CreateLocationDto } from "./dto/create-location.dto.ts";
import { UpdateLocationDto } from "./dto/update-location.dto.ts";
import { Location } from "./entities/location.entity";

@Injectable()
export class LocationService {
  constructor(
    @Inject("Location_REPOSITORY")
    private readonly LocationRepository: typeof Location
  ) { }

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    return await this.LocationRepository.create<Location>(createLocationDto);
  }

  async findAll() {
    return await this.LocationRepository.findAll<Location>();
  }

  async findOne(id: number) {
    return await this.LocationRepository.findOne<Location>({ where: { id } });
  }

  async update(id: number, updateLocationDto: UpdateLocationDto) {
    return await this.LocationRepository.update<Location>(updateLocationDto, {
      where: { id },
    });
  }
}
