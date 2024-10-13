import styles from "./userProfile.module.css";

export default function UserProfile({ firstName, lastName, skills } = props) {
  return (
    <>
      <section>
        <ul className={`${styles.userDetails} ${styles.border}`}>
          <li>First Name: {firstName}</li>
          <li>Last Name: {lastName}</li>
          <li>Skills: {skills}</li>
        </ul>
      </section>
    </>
  );
}
