export type categoryProducts = 'Blades' | 'Rubbers' | 'Balls' | 'Tables' | 'Nets' | ''
export type maritalStatus = 'Soltero(a)' | 'Casado(a)' | 'Separado(a)' | 'Divorciado(a)' | 'Union Libre' | 'Viudo(a)' | ''

export interface Users {
  _id?: any;
  Cedula: string;
  Rol?: number;
  Name: string;
  LastName?: string;
  Email: string;
  Password?: string;
  Age?: string;
  Address?: string;
  Phone?: string;
  MaritalStatus?: maritalStatus;
}

export interface Products {
  _id?: any;
  Codigo: string;
  Nombre: string;
  Precio: string | number;
  Cantidad: string | number;
  Categoria?: categoryProducts;
  Descripcion?: string;
  FechaV?: string;
}

export function NamesFormat(word: string | undefined) {
  if (typeof word == undefined || typeof word == null || word == "") {
    return "";
  } else {
    if (typeof word != 'string') {
      throw TypeError('El argumento debe ser una cadena de caracteres (text)')
    }
    let word_split = word.trim().split(' ')
    return word_split.map(p => p[0].toUpperCase() + p.slice(1).toLowerCase()).join(' ')
  }
}
