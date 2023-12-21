"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
  const [searchText, setsearchText] = useState();
  const [posts, setposts] = useState([]);

  const handleSearchChange = () => {};

  const PromptCardList = ({ data, handleTagClick }) => {
    return (
      <div className="mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    );
  };

  useEffect(() => {
    const fetchposts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setposts(data);
    };
    fetchposts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for tag or a username.."
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
          required
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
