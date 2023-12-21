import Link from "next/link";
import React from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
          {type} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur error doloremque corporis cumque dolorem magni velit est! Vitae nisi quaerat et impedit harum totam. Eaque harum distinctio deleniti quod consectetur?
      </p>

      <form onSubmit={handleSubmit}
      className="mt-10 glassmorphism w-full max-w-2xl flex flex-col gap-7"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e)=> setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            className="form_textarea"
            required
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag{` `}
            <span className="font-normal">(#product, #webdevelopment, #idea)</span>
          </span>

          <input
            value={post.tag}
            onChange={(e)=> setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            className="form_input"
            required
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm">
              Cancel
            </Link>

            <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
              {submitting ? `${type}...` : type}
            </button>
        </div>

      </form>
    </section>
  );
};

export default Form;
