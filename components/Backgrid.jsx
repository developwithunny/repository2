const movies = [
  {
    title: "Dune",
    image:
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  },
  {
    title: "Interstellar",
    image:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    title: "The Dark Knight",
    image:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    title: "Inception",
    image:
      "https://image.tmdb.org/t/p/w500/5d7hpbefNiuebl5eqP5cRrckVxs.jpg",
  },
  {
    title: "Joker",
    image:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    title: "John Wick",
    image:
      "https://image.tmdb.org/t/p/w500/snBOuXDdhmTvlzMUvP9Em3Pp1u1.jpg",
  },
  {
    title: "The Godfather",
    image:
      "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    title: "Spider-Man",
    image:
      "https://image.tmdb.org/t/p/w500/iPOn6DinuVyLY17YM9mKuPofV08.jpg",
  },
];

export default function MovieWall() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 h-[400vh] bg-purple-600">

      {/* Dark gradient */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-[#05020d] via-[#05020d]/90 to-transparent" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 z-10 bg-linear-to-t from-[#05020d] to-transparent" />

      {/* Movie wall */}
      <div className="absolute right-[-12%] top-[-25%] w-[70%] h-[150%] rotate-[-8deg]">

        {/* Column 1 */}
        <div className="flex gap-5 animate-movie-wall">

          <div className="flex flex-col gap-5 mt-32">
            {[...movies, ...movies].map((movie, i) => (
              <img
                key={`one-${i}`}
                src={movie.image}
                alt=""
                className="w-36 h-52 object-cover rounded-xl shadow-2xl opacity-80"
              />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5 -mt-20 animate-movie-wall-slow">
            {[...movies, ...movies].map((movie, i) => (
              <img
                key={`two-${i}`}
                src={movie.image}
                alt=""
                className="w-36 h-52 object-cover rounded-xl shadow-2xl opacity-90"
              />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-5 mt-32 animate-movie-wall-fast">
            {[...movies, ...movies].map((movie, i) => (
              <img
                key={`three-${i}`}
                src={movie.image}
                alt=""
                className="w-36 h-52 object-cover rounded-xl shadow-2xl opacity-80"
              />
            ))}
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-5 -mt-">
            {[...movies, ...movies].map((movie, i) => (
              <img
                key={`four-${i}`}
                src={movie.image}
                alt=""
                className="w-36 h-52 object-cover rounded-xl shadow-2xl opacity-75"
              />
            ))}
          </div>

          <div className="flex flex-col gap-5 -mt-20 animate-movie-wall-slow">
            {[...movies, ...movies].map((movie, i) => (
              <img
                key={`two-${i}`}
                src={movie.image}
                alt=""
                className="w-36 h-52 object-cover rounded-xl shadow-2xl opacity-90"
              />
            ))}
          </div>

          <div className="flex flex-col gap-5 mt-32">
            {[...movies, ...movies].map((movie, i) => (
              <img
                key={`one-${i}`}
                src={movie.image}
                alt=""
                className="w-36 h-52 object-cover rounded-xl shadow-2xl opacity-80"
              />
            ))}
          </div>


         

        </div>
      </div>

      {/* Purple glow */}
      <div className="absolute right-[35%] top-[30%] w-100 h-100 bg-purple-900 blur-[140px] rounded-full z-5" />

    </div>
  );
}