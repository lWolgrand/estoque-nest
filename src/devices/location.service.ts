import { Inject, Injectable } from "@nestjs/common";
import { CreateLocationDto } from "./dto/create-location.dto";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { Location } from "./entities/location.entity";

@Injectable()
export class LocationService {
  constructor(
    @Inject("LOCATION_REPOSITORY")
    private readonly locationRepository: typeof Location
  ) { }

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    return await this.locationRepository.create<Location>(createLocationDto);
  }

  async findAll() {
    return await this.locationRepository.findAll<Location>();
  }

  async findOne(id: number) {
    return await this.locationRepository.findOne<Location>({ where: { id } });
  }

  async update(id: number, updateLocationDto: UpdateLocationDto) {
    return await this.locationRepository.update<Location>(updateLocationDto, {
      where: { id },
    });
  }
}
