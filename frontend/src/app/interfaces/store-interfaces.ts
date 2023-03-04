export type maritalStatus = 'Soltero(a)' | 'Casado(a)' | 'Separado(a)' | 'Divorciado(a)' | 'Union Libre' | 'Viudo(a)' | ''

export interface Category {
  _id?: any;
  Code: string;
  Name: string;
}

export interface Users {
  _id?: any;
  Cedula: string;
  Rol: number;
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
  Poster?: string;
  Categoria?: string;
  Color?: string;
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
/*
export function DescendingOrder(value:any, order:any){
  return value.sort((x:any,y:any) => x.order-y.order)
}

export function AscendingOrder(value:any){
  return value.sort((x:any,y:any) => y.Code-x.Code)
}
*/
