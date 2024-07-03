import { Link } from "react-router-dom";
import DocumentTitle from "../../components/DocumentTitle";

const NotFoundPage = () => {
  return (
    <>
      <DocumentTitle>NotFound Page</DocumentTitle>
      <h2>NotFound Page</h2>
      <Link to="/">Back to HomePage</Link>
    </>
  );
};
export default NotFoundPage;
