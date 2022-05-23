export class CreateDeviceDto {
  device_name: string;
  serial_number: string;
  device_description: string;
  id_source: number;
  id_status: number;
  id_category: number;
  id_invoiceIn?: number;
  id_invoiceOut?: number;
  id_location?: number;
  enabled?: boolean;
}
