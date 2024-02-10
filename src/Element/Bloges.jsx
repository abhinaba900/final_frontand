import React, { useEffect, useState } from "react";
import axios from "axios";
function Bloges() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://vast-pear-barnacle-toga.cyclic.app/posts",
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          console.log(response.data);
          setPosts(response.data);
        }
        console.log(response.data);
      } catch (error) {
        alert(error);
      }
    }

    fetchData();
  }, []);
  return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post._id}>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export default Bloges;
