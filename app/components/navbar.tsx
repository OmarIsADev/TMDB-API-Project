import { Link } from "react-router";
import { Dropdown, Input, type MenuProps } from "antd";
import { ChevronDown, Search } from "lucide-react";
// import {} from ""

const moviesItems: MenuProps["items"] = [
  {
    key: "1",
    label: <Link to="/movies/popular">Now Playing</Link>,
  },
  {
    key: "2",
    label: <Link to="/movies/now-playing">Popular</Link>,
  },
  {
    key: "3",
    label: <Link to="/movies/top-rated">Top Rated</Link>,
  },
  {
    key: "4",
    label: <Link to="/movies/upcoming">Upcoming</Link>,
  },
];

const TVShowsItems: MenuProps["items"] = [
  {
    key: "1",
    label: <Link to="/tv/popular">Airing Today</Link>,
  },
  {
    key: "2",
    label: <Link to="/tv/top-rated">On TV</Link>,
  },
  {
    key: "3",
    label: <Link to="/tv/airing-today">Popular</Link>,
  },
  {
    key: "4",
    label: <Link to="/tv/on-the-air">Top Rated</Link>,
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-foreground fixed top-0 w-full z-10">
      <div className="text-lg font-bold w-50">TMDB</div>
      <div className="gap-2 flex items-center">
        <Link to="/home" className="nav-btn">
          Home
        </Link>
        <Dropdown trigger={["click", "hover"]} menu={{ items: moviesItems }}>
          <button className="flex gap-2 nav-btn">
            Movies <ChevronDown />
          </button>
        </Dropdown>
        <Link to="/actors" className="nav-btn">
          Actors
        </Link>
        <Dropdown trigger={["click", "hover"]} menu={{ items: TVShowsItems }}>
          <button className="flex gap-2 nav-btn">
            TV Shows <ChevronDown />
          </button>
        </Dropdown>
      </div>
      <Input
        placeholder="Search"
        suffix={<Search className="text-gray-500" />}
        style={{ width: 200, border: "var(--color-gray-500) solid 2px" }}
      />
    </nav>
  );
};

export default Navbar;
