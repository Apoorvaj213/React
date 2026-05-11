import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Header from "./Header";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch data");
      });
  }, []);

  return (
    <div>
      <Header title="API Fetch App" />

      {error && <h2>{error}</h2>}

      <div className="card-container">
        {posts.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;