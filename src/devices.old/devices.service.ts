import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class DevicesService {
  constructor(private sequelize: Sequelize) {}
  delete(id: number) {
    throw new Error('Method not implemented.');
  }
  update(id: number, device: any) {
    throw new Error('Method not implemented.');
  }
  create(device: any) {
    throw new Error('Method not implemented.');
  }
  getById(id: number) {
    throw new Error('Method not implemented.');
  }
  getAll() {
    throw new Error('Method not implemented.');
  }
}
