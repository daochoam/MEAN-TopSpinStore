type CategoryProducts = 'Blades' | 'Rubbers' | 'Balls' | 'Tables' | 'Nets'

export interface Users {
  _id?:any;
  Cedula: number|string;
  Name: string;
  LastName?: string;
  Email: string;
  Password: string;
  Age?: number | string;
  Address?: string;
  Phone?: number;
}

export interface Products {
  _id?:any;
  Codigo: string;
  Nombre: string;
  Precio: string;
  Cantidad: string;
  Categorias?: CategoryProducts;
  FechaV?: string;
}

export function Names_Format(word:string) {
  if (typeof word != 'string') {
      throw TypeError('El argumento debe ser una cadena de caracteres (text)')
  }
  let word_split = word.trim().split(' ')
  return word_split.map(p => p[0].toUpperCase() + p.slice(1).toLowerCase()).join(' ')
}
