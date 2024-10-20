type Params = {
    params: {
        productId: string,
        reviewId: string
    }
}

const ReviewDetails = ({params}: Params) => {
  return (
      <h2>Review {params.reviewId} for the product {params.productId} </h2>
  );
};

export default ReviewDetails;
