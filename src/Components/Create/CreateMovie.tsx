import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useAppDispatch } from "../../Redux/hooks";
import { resetBudget } from "../../Redux/Reducers/budgetSlice";
import {
  resetMovieInfo,
  setMovieInfo,
} from "../../Redux/Reducers/movieInfoSlice";
import { RootState } from "../../Redux/store";
import CompanyHeader from "../Global/CompanyHeader";
import { Option } from "./Interfaces/CreateInterface";

interface Props {}

const CreateMovie: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const movieInfo = useSelector((state: RootState) => state.movieInfo);

  const [movieName, setMovieName] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<Option | null>(null);
  const [movieDescription, setMovieDescription] = useState<string>("");

  useEffect(() => {
    dispatch(resetMovieInfo());
    dispatch(resetBudget());
  }, [dispatch]);

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
    setSelectedGenre(selectedOption);
  };

  const submitMovie = (): void => {
    if (movieName === "" || selectedGenre === null) {
      alert("Please enter a name and pick a genre!");
      return;
    }
    dispatch(
      setMovieInfo({
        ...movieInfo,
        title: movieName,
        genre: selectedGenre.value,
        description: movieDescription,
      }),
    );
    navigate("/funding");
  };

  return (
    <>
      <CompanyHeader />
      <div className="title-container">
        <div>Title:</div>
        <input
          value={movieName}
          onInput={(e) => setMovieName((e.target as HTMLInputElement).value)}
          placeholder="Star Wars"
        />
      </div>
      <div className="genre-container">
        <div>Genre:</div>
        <Select options={options} onChange={handleGenreChange} />
      </div>
      <div className="description-container">
        <div>Description (optional):</div>
        <input
          value={movieDescription}
          onInput={(e) =>
            setMovieDescription((e.target as HTMLInputElement).value)
          }
          placeholder="This is a space movie."
        />
      </div>
      <button onClick={submitMovie}>Submit</button>
    </>
  );
};

export default CreateMovie;
