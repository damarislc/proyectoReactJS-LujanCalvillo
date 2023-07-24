import "./Navbar.css";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Aod, AudioFile, AutoStories, LibraryBooks } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Dashboard from "../../page/dashboard/Dashboard";

const Navbar = () => {
  let userRol = "admin";
  return (
    <header className="page-header">
      <div className="panel wrapper">
        <div className="panel header">
          <Link to="/" className="logo">
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
          </Link>
          <CartWidget />
        </div>
      </div>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Todos"
          icon={<LibraryBooks />}
        />
        <BottomNavigationAction
          component={Link}
          to="/type/libro"
          label="Libros"
          icon={<AutoStories />}
        />
        <BottomNavigationAction
          component={Link}
          to="/type/eBook"
          label="eBooks"
          icon={<Aod />}
        />
        <BottomNavigationAction
          component={Link}
          to="/type/audiolibro"
          label="audiolibro"
          icon={<AudioFile />}
        />
        {userRol === "admin" && <Link to={"/Dashboard"}>Admin</Link>}
      </BottomNavigation>
    </header>
  );
};

export default Navbar;
