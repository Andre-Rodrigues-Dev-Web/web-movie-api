import './style.css'

function Home() {

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  const movies = [
    {
      id: 1,
      title: 'Spider Man No Way Home',
      image: imagePath + '1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'
    },
    {
      id: 2,
      title: 'Encanto',
      image: imagePath + '4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg'
    },
    {
      id: 3,
      title: 'Scream',
      image: imagePath + 'kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg'
    },
    {
      id: 4,
      title: 'The Batman',
      image: imagePath + '74xTEgt7R36Fpooo50r9T25onhq.jpg'
    },
    {
      id: 2,
      title: 'Encanto',
      image: imagePath + '4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg'
    },
    {
      id: 3,
      title: 'Scream',
      image: imagePath + 'kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg'
    },
    {
      id: 4,
      title: 'The Batman',
      image: imagePath + '74xTEgt7R36Fpooo50r9T25onhq.jpg'
    },
    {
      id: 2,
      title: 'Encanto',
      image: imagePath + '4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg'
    },
    {
      id: 3,
      title: 'Scream',
      image: imagePath + 'kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg'
    },
  ]

  return (
    <div className="App">
      <h1>Movies</h1>
      <ul>
      {movies.map(movie => {
        return (
          <li>
            <img src={movie.image} alt={movie.title}/>
            <span>{movie.title}</span>
          </li>
        )
      })}
      </ul>
    </div>
  );
}

export default Home;
