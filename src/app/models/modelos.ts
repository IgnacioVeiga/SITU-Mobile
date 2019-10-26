export class InformacionDTO {
    public titulo: string;
    public subtitulo: string;
    public miniatura = ''; // base64
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
