// Hooks are functions that let you “hook into” React state and lifecycle features from function components. They were introduced in React 16.8.
// Purpose: Hooks provide a way to use stateful logic and side effects in functional components without writing a class.
import { useState } from "react";

export default function LikeButton() {
  let [likes, setLikes] = useState(0);

  function countLikes(e) {
    // When you pass likes++ to setLikes, you are effectively setting the state to the current value of likes before it is incremented. This means the state does not actually change on the first click, which is likely not what you intended.
    setLikes(likes + 1);
    console.log(likes);
    console.log(e);
  }

  // Event if lkes variable is added to text React does not update the text
  return <button onClick={countLikes}>{likes} Likes</button>;
}
