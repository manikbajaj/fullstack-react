import LikeButton from "../likeButton/likeButton.jsx";
import PropTypes from "prop-types";
import styles from "./userProfile.module.css";

export default function UserProfile(props) {
  // ! Adding default props helps you get rid of some runtime errors
  const {
    firstName = "First Name Not Provided",
    lastName = "Last Name Not Provided",
    skills = "Skills Not added",
  } = props;

  return (
    <>
      <section>
        <ul className={`${styles.userDetails} ${styles.border}`}>
          <li>First Name: {firstName}</li>
          <li>Last Name: {lastName}</li>
          <li>Skills: {skills}</li>
        </ul>
        <LikeButton />
      </section>
    </>
  );
}

UserProfile.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  skills: PropTypes.string.isRequired,
};
