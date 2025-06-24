import { Products } from "./schema"

export type ProductListProps = {
  products: Products[],
  isLoading: boolean,
  isFetched: boolean,
  isFetching: boolean
}
