export class ListItem {
  public id: number = 0;
  public texto: string = '';
  public seleccionado: boolean = false;
}

export class Alert {
  public titulo: string = '';
  public subtitulo: string = '';

  // La miniatura es un string en base64
  public miniatura = "";
  public fuente: string = '';
  public fecha: Date | undefined;
}

export class File {
  public id: number = 0;
  public nombre: string = '';
  public formato: string = '';
  public peso: number = 0;
  public miniatura: string = '';
}

export class User {
  public dni: number = 0;
  public name: string = '';
  public password: string = '';
  public email: string = '';
}