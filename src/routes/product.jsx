import { useLoaderData } from 'react-router-dom';
import '../styles/product.css';

export default function Product() {
  const { product } = useLoaderData();

  return (
    <div id="product">
      <img src={product.image} alt={product.description} />
      <h1>{product.title}</h1>
      <h2>{product.description}</h2>
    </div>
  );
}
