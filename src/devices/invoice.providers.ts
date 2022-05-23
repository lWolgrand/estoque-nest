import { Invoice } from "./entities/invoice.entity";

export const invoiceProviders = [
  {
    provide: "INVOICE_REPOSITORY",
    useValue: Invoice,
  },
];
