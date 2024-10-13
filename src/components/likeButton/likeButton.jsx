export default function LikeButton() {
  let likes = 0;
  function countLikes(e) {
    likes++;
    console.log(likes);
    console.log(e);
  }

  // Event if lkes variable is added to text React does not update the text
  return <button onClick={countLikes}>{likes} Likes</button>;
}
