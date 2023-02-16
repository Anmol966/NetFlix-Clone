import '../App.css';

import Row from './Row';
import requests from '../request/requests';
import Banner from "../components/Banner"

function Body() {
  return (
    <div>
      <Banner />
      <Row title="Trending Now Movies" apiUrl={requests.fetchPopularMovie} isLargeRow isMovie />
      <Row title="Top Rated TV" apiUrl={requests.fetchPopularTv} isLargeRow />
      <Row title="Top Rated Movies" apiUrl={requests.fetchTopRatedMovie} isMovie isLargeRow />
      <Row title="Top Rated TV" apiUrl={requests.fetchTopRatedTv} isLargeRow />
    </div>
  )
}

export default Body