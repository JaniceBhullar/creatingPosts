import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/UserSlice";

// eslint-disable-next-line react/prop-types
export default function PostAuthor({ userId }) {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);
  return <span>by: {author ? author.name : "unknown author"}</span>;
}
