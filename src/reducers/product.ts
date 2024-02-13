import { IProduct } from "@/types/product";

export function cartReducer(
  state: IProduct[],
  action: { type: string; payload: IProduct }
) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}
