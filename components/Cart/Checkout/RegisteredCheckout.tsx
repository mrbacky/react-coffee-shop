// My imports.
import CartCheck from "../../Layout/Icons/CartCheck";
import type User from "../../../models/User";
// CSS import.
import styles from "./Checkout.module.css";

type RegisteredCheckoutProps = {
  firstName: string;
  lastName: string;
  email: string;
  onCancel: () => void;
  onClose: () => void;
  onConfirm: (userData: User) => Promise<void>;
};

function RegisteredCheckout({
  firstName,
  lastName,
  email,
  onCancel,
  onClose,
  onConfirm,
}: RegisteredCheckoutProps) {
  const confirmHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // Save user info data to send to database.
    const userInfo: User = {
      email: email,
      firstName: firstName,
      lastName: lastName,
    };

    onConfirm(userInfo);
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <section className={styles.user} title="User Information">
        <h2>
          <span>Name:</span>
          {`${firstName} ${lastName}`}
        </h2>
        <h2>
          <span>Email:</span>
          {`${email}`}
        </h2>
      </section>
      <section className={styles.actions} title="buttons">
        <button className={styles.close} type="button" onClick={onClose}>
          Close
        </button>
        <button className={styles.cancel} type="button" onClick={onCancel}>
          Cancel
        </button>
        <button
          id="logged-in-user-confirm-order-button"
          className={styles.submit}
          type="submit"
        >
          <span>
            <CartCheck />
          </span>
          {" Confirm"}
        </button>
      </section>
    </form>
  );
}

export default RegisteredCheckout;
