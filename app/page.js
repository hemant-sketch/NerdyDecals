import Products from "@/components/Products.jsx";
import ImageBanner from "@/components/ImageBanner.jsx"
import {getBaseUrl} from "../utils/getBaseUrl.js";

export async function getProducts(){
  const baseURL = getBaseUrl();
  const response = await fetch(baseURL + '/api/products');
  const products = await response.json();
  return products;
}

export default async function Home(props) {

  const products = await getProducts();
  
  let planner = null;
  let stickers = [];

  for(let product of products) {
    if(product.name === 'Medieval Dragon Month Planner') {
      planner = product;
      continue;
    }
    stickers.push(product);


  }

  return (
    <>
      <ImageBanner/>
      <section>
        <Products planner={planner} stickers={stickers}/>
      </section>
    </>
  )
}
