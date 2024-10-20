import {Metadata} from 'next';

type Params = {
    params: {
        productId: string,
    }
}

export const generateMetadata = ({params}: Params): Metadata => {
    return {
        title: `Product ${params.productId}`
    }
}


const ProductDetails = ({params}: Params) => {
  return (
      <>
        <h2>
          Details about product {params.productId}
        </h2>

      </>


  );
};

export default ProductDetails;

