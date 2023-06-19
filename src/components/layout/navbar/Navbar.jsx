import "./Navbar.css";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Aod, AudioFile, AutoStories } from "@mui/icons-material";

const Navbar = () => {
  return (
    <header className="page-header">
      <div className="panel wrapper">
        <div className="panel header">
          <a href="." className="logo">
            <picture>
              <img
                className="logo-img"
                src="https://res.cloudinary.com/doxztm7ed/image/upload/v1687198242/225932_ugadgb.png"
                alt="Libreria logo"
                title="Libreria logo"
                width={50}
                height={50}
              />
            </picture>
          </a>
          <CartWidget />
        </div>
      </div>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Libros" icon={<AutoStories />} />
        <BottomNavigationAction label="Ebooks" icon={<Aod />} />
        <BottomNavigationAction label="Audiolibros" icon={<AudioFile />} />
      </BottomNavigation>
    </header>
  );
};

export default Navbar;
