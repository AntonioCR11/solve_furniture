export type AnimationOption = {
  initial : any
  animate ? : any
  transition ? : any
  whileInView ? : any
  viewport ? : any
};

export type Room = {
  id: number;
  code: string;
  name: string;
  image: string;
}
export type Product = {
  id: number;
  code: string;
  name: string;
  image: string;
  price : number;
  isNew : boolean;
  type : string;
}
export type Journal = {
  id: number;
  code: string;
  name: string;
  image: string;
  category : string;
  date : string;
  read : number,
  author : string;
}