export const ItemDataDefault: IItemData = {
  name: "",
  category: "",
  cost: "",
  price: "",
  stock: "",
  withOptions: false,
  options: "",
};

export interface IItemData {
  id?: string;
  name: string;
  category: string;
  cost: number | string;
  price: number | string;
  stock: number | string;
  withOptions: boolean;
  options: string;
}
