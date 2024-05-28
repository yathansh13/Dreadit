import { useParams } from "react-router-dom";
import "./AllPosts.css";

export default function AllPosts() {
  const { pageNumber } = useParams();
  return <div className="head-text">All Posts; page number:{pageNumber}</div>;
}
