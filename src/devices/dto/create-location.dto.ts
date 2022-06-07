export class CreateLocationDto {
  /**
   * Nome do resposnsavel pelo equipamento.
   * Campo obrigatorio..
   * @exemple: "PLataforma | Rocinha | Mandela | ..."
   */
  location_name: string;

  /**
   * Entrada de dados para inserir o endereco do local.
   * Campo obrigatorio..
   * @exemple: "Rua da casa da paz, nxx"
   */
  location_address: string;

    /**
   * Nome do responsavel para quem esta com o equipamento.
   * Campo obrigatorio..
   * @exemple: "Rua do rocinha"
   */
  contact_name: string;

    /**
   * Numero do contato de quem esta com o equipamento.
   * Campo obrigatorio..
   * @exemple: "Rua do rocinha"
   */
  contact_phone: string;

    /**
   * Email do contato de quem esta com o equipamento.
   * Campo obrigatorio..
   * @exemple: "Rua do rocinha"
   */
  contact_email: string;

    /**
   * Entrada de dados para inserir o endereco do local.
   * Campo obrigatorio..
   * @exemple: "Rua do rocinha"
   */
  address: string;
}
