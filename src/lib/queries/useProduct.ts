import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../product";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["get-products"],
    queryFn: () => getProducts(),
  });
};
