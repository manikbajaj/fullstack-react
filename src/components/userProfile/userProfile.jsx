import styles from "./userProfile.module.css";

export default function UserProfile() {
  return (
    <>
      <section>
        {/* {<ul className={styles["user-details"]}>} */}
        {/* <ul className={styles.userDetails}> */}
        {/* Multiple Styles can be applied and styles are scoped to each module */}
        <ul className={`${styles.userDetails} ${styles.border}`}>
          <li>First Name: John</li>
          <li>Last Name: Doe</li>
          <li>Skills: React, JavaScript</li>
        </ul>
      </section>
    </>
  );
}
