export default function getReviewersRating(reviews) {
  const rating = reviews.reduce(
    (acc, reviewer) => {
      acc.value += reviewer.reviewer_rating;
      return acc;
    },
    { quantity: reviews.length, value: 0 }
  );
  rating.value = rating.value / reviews.length;

  return rating;
}
