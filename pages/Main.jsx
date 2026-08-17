import { useState, useMemo, useEffect } from "react";
import axios from "axios";
import WarpText from "../components/WarpText";
import { Link } from "react-router-dom";
import Backgrid from "../components/Backgrid"
import { motion } from 'motion/react'


const YOUR_API_KEY = "e37c678d577237bc55f789e4a958f4df";

const Main = () => {
  const [movie, setMovie] = useState("");
  const [debouncedMovie, setDebouncedMovie] = useState("");
  const [data, setData] = useState([]);

  const getMovie = async () => {

    try {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${YOUR_API_KEY}&query=${debouncedMovie }&language=en-US&page=1&include_adult=false`
      );
      console.log(movies.data)
      setData(movies.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedMovie(movie);
    }, 200);

    return () => clearTimeout(timer);
  }, [movie]);
  useEffect(() => {
    if (!debouncedMovie.trim()) return;

    getMovie();
  }, [debouncedMovie]);

  // useEffect(()=>{
  //   if(!movie.trim()){
  //     return;
  //   }
  //   const timer = setTimeout(()=>{
  //     getMovie();
  //   },200);
    
  //   return() =>clearTimeout(timer);
  // },[movie])

  return (
    <div className="min-h-screen  text-white ">
      <div className="absolute inset-0 z-0">
        <Backgrid />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col items-start justify-center pl-20">
         <div className="">
          <motion.h1 
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }} className="text-5xl font-bold -mt-70">Movi<span className="opacity- text-3xl text-purple-600">Bovi</span></motion.h1>
        <motion.h2
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="text-4xl font-bold mt-48">
          Find Your<span className="text-purple-600"> Perfect</span> Watch
        </motion.h2>
        <h3 className="ml- text-gray-400/65 mt-1 ">Explore Thousands of Movies, Find Your Favorite one.</h3>
        </div> 

        <div
          className="flex items-center gap-2 mt-5"
        >
          <motion.input
           initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
            // type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            placeholder="Search your mood"
            className="w-70 h-10 px-4 rounded-3xl bg-purple-400/20 border border-purple-950/20 text-white outline-none placeholder:text-gray-400 cursor-pointer"
          />
          <motion.button
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
            type="submit"
            className="w-30 h-10 rounded-3xl bg-purple-600 border border-purple-950/20 text-white hover:bg-white/20 transition cursor-pointer"
          >
            Search
          </motion.button>
        </div>
      </div>
      <div className="relative z-10 grid grid-cols-4 gap-6 max-w-5xl mx-auto -mt-50 px-5">
        {data.map((item) => (
          <Link
            to={`/watch/${item.id}`}
            key={item.id}
            className="rounded-xl overflow-hidden bg-white/10"
          >
            {item.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className="w-full"
              />
            )}
            <div className="p-3">
              <h2 className="font-bold">
                {item.title}
              </h2>
              <p className="text-sm text-gray-400 font-bold">
                ⭐ {item.vote_average?.toFixed(1)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;