import React from "react";
import logo from "../assets/images/exp.png";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { getAllTweets, postTweet } from "../redux/tweet/tweets.action";

const TweetPost = () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const navigate = useNavigate();

  const handlePath = (path) => {
    navigate(path);
  };

  const initialValues = {
    tweetText: "",
  };

  const { handleChange, handleSubmit, handleBlur, values, setValues } =
    useFormik({
      initialValues,
      onSubmit: async (values) => {
        await dispatch(postTweet(values));
        setValues(initialValues);
        await dispatch(getAllTweets());
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex p-4 rounded-md shadow-md">
        <div className="flex-shrink-0">
          <img src={logo} alt="Profile" className="w-16 h-16 rounded-full" />
        </div>
        <div className="flex-1 ml-4">
          <textarea
            name="tweetText"
            placeholder="What's in your mind?"
            className="w-full p-2 border rounded-md resize-none"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.tweetText}
            required
          />

          {!auth?.user?.name ? (
            <>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-full"
                onClick={() => handlePath("/login")}
              >
                Login to Post
              </button>
            </>
          ) : (
            <>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-full"
              >
                Post
              </button>
            </>
          )}
        </div>
      </div>
    </form>
  );
};

export default TweetPost;
