export class CreateUserDto {
    /**
     * Entrada de dados para inserir o nome do usuario.
     * Campo obrigatorio..
     * @exemple: "Glauber"
     */
    username: string;
    /**
     * Entrada de dados para inserir o email do usuario.
     * Campo obrigatorio..
     * @exemple: "
     */
    email: string;
    /**
     * Entrada de dados para inserir a senha do usuario.
     * Campo obrigatorio..
     * @exemple: "123456"
     */
    password: string;    
}