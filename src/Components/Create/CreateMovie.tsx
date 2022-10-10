import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Option } from "./Interfaces/CreateInterface";

interface Props {}

const CreateMovie: React.FC<Props> = (props) => {
  const options: Option[] = [
    { label: "Action/Adventure", value: "action-adventure" },
    { label: "Comedy", value: "comedy" },
    { label: "Drama", value: "drama" },
    { label: "Romance", value: "romance" },
    { label: "Horror", value: "horror" },
    { label: "Sci-Fi", value: "sci-fi" },
    { label: "Animated", value: "animated" },
  ];

  const handleGenreChange = (selectedOption: Option | null): void => {
    console.log("handleGenreChange", selectedOption);
  };

  return (
    <>
      <div className="title-container">
        <div>Title:</div>
        <input placeholder="Star Wars" />
      </div>
      <div className="genre-container">
        <div>Genre:</div>
        <Select options={options} onChange={handleGenreChange} />
      </div>
      <div className="description-container">
        <div>Description (optional):</div>
        <input placeholder="This is a space movie." />
      </div>
      <Link to="/funding">Submit</Link>
    </>
  );
};

export default CreateMovie;
