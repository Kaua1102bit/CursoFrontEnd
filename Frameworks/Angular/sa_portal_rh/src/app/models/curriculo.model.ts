export class Curriculo {
  constructor(
    public cpf: number,
    public nome: string,
    public email: string,
    public formacao: string,
    public experiencia: string,
    public habilidades: string = '',
    public linkedin: string = ''
  ) {}

  toMap(): { [key: string]: any } {
    return {
      cpf: this.cpf,
      nome: this.nome,
      email: this.email,
      formacao: this.formacao,
      experiencia: this.experiencia,
      habilidades: this.habilidades,
      linkedin: this.linkedin
    }
  }

  static fromMap(map: any): Curriculo {
    return new Curriculo(
      map.cpf,
      map.nome,
      map.email,
      map.formacao,
      map.experiencia,
      map.habilidades || '',
      map.linkedin || ''
    );
  }
}
