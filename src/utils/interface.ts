export interface Context {
  name: string
  status: boolean
  value : Array<Values>
}

export interface Values {
  name: string
  forecast : number
  performance : number
}