export class CreateDeviceDto {
  /**
   * Entrada de dados para inserir o nome do dispositivo.
   * Campo obrigatorio..
   * @exemple: "notebook-acer"
   */
  device_name: string;

  /**
   * O serial number do dispositivo. Um numero tem sido geraldo e quem esta de frente e o Glauber
   * Campo obrigatorio.
   * @exemple: "123456789"
   */
  serial_number: string;

  /**
   * Aqui na descriçao peço encarecidamente para que o usuário insira caracteristicas do dispositivo como cores, detalhes de adesivos, marcas, etc.
   * Campo obrigatorio.
   * @exemple: "notebook Acer 15.6, com um adesivo da apple, cores pretas e brancas"
   */
  device_description: string;

  /**
   * Aqui na origem apenas queremos saber se o dispositivo veio de um fornecedor ou se é doaçao compra ou alugado. Ele tera um dropdown com as 3 opçoes.
   * O campo tem que ser passado. Se não for passado, o sistema não deixa cadastrar o dispositivo.
   * Campo obrigatorio.
   * @exemple: "Compra"   * 
   */
  id_source: number;

  /**
   * Na status como o proprio nome fala, estamos dizendo qual o estado do dispositivo.
   * Campo obrigatorio.
   * @exemple: "Ativo"
   */
  id_status: number;

  /**
   * Aqui passamos qual a categoria do equipamento, se vai ser um movel, um teclado, um mouse, etc.
   * Campo obrigatorio.
   * @exemple: "Notebook"
   */
  id_category: number;

  /**
   * Aqui passamos uma data para quando o dispositivo chegar no estoque.
   * Campo nao obrigatorio porque existem dispositivos que nao tem as informaçoes completas.
   * @exemple: "2020-06-01"
   */
  id_invoiceIn?: number;

  /**
   * Aqui passamos uma data para quando o dispositivo sair do estoque.
   * Campo nao obrigatorio porque existem dispositivos que nao tem as informaçoes completas.
   * @exemple: "2020-06-01"
   */
  id_invoiceOut?: number;

  /**
   * 
   */
  id_location?: number;
  
  /**
  * 
  */
  enabled?: boolean;
}
