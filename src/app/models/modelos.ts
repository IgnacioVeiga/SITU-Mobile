// Esto es lo que conociamos como "ListItem" en Ubicua
export class ItemDeLista {
  public id: number;
  public texto: string;
  public seleccionado: boolean;
}

export class InformacionDTO {
  public titulo: string;
  public subtitulo: string;

  // La miniatura es un string en base64
  public miniatura = "";
  public fuente: string;
  public fecha: Date;
}

export class ArchivoDTO {
  public id: number;
  public nombre: string;
  public formato: string;
  public peso: number;
  public miniatura: string;
}
