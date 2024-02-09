import { useContext } from "react";
import { Review } from "../review/component";
import { ReviewForm } from "../review-form/component";
import styles from "./styles.module.scss";
import { UserContext } from "../../contexts/user";

export const Reviews = ({ reviewsIds }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <ul>
        {reviewsIds.map((id) => (
          <li key={id}>
            <Review reviewId={id} />
          </li>
        ))}
      </ul>
      {user && (
        <div>
          <hr />
          <ReviewForm className={styles.review_form} />
        </div>
      )}
    </div>
  );
};
