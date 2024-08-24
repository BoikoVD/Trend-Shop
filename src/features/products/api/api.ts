import axios from "axios";
import { Categories, schemaCategories } from "../schemas/schemas";

export async function getCategories(): Promise<Categories> {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );
  if (response.data) {
    const result = schemaCategories.parse(response.data);
    return result;
  } else {
    throw new Error("[Get Categories api]: No categories data!");
  }
}
