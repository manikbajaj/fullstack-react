import UserProfile from "./components/UserProfile/userProfile.jsx";

const user = {
  firstName: "Mark",
  lastName: "Doe",
  skills: "NodeJs, React",
};

const user2 = {
  firstName: "John",
  lastName: "Doe",
  skills: "HTML, React",
};

function App() {
  return (
    <>
      <UserProfile
        // Considered as an invalid propType
        // No validation for undefined
        firstName={24}
        lastName={user.lastName}
        skills={user.skills}
      />
      <UserProfile
        firstName={user2.firstName}
        lastName={user2.lastName}
        // Commenting out skills will also produce error
        //skills={user2.skills}
      />
    </>
  );
}

export default App;
