import { FC } from "react";

import ReservationForm from "@/components/ReservationForm";

import styles from "./reservationCard.module.scss";

const ReservationCard: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.header}>
          <h2>Забронируйте переговорную!</h2>
        </div>
      </div>
      <div className={styles.right}>
        <ReservationForm />
      </div>
    </div>
  );
};

export default ReservationCard;
