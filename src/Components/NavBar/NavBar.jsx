import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext/CartContext";
import { useState } from "react";
import SideMenu from "./SideMenu/SideMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import "./NavBar.css";

export default function NavBar() {
  const { countItems } = useCart();

  const [openLeftMenu, changeOpenLeftMenu] = useState(false);

  const handleSidebarOpen = () => {
    changeOpenLeftMenu(true);
  };

  const handleSidebarClose = () => {
    changeOpenLeftMenu(false);
  };

  return (
    <>
      <AppBar
        class="redText"
        position="static"
        style={{ backgroundColor: "#0E1439" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 2 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ alignSelf: "flex-end" }}
            >
              <Link class="redText" to="/">
                WatchShop
              </Link>
            </Typography>
          </Box>

          <ShoppingCartIcon />
          <Badge
            badgeContent={countItems() > 0 ? <CartWidget /> : null}
          ></Badge>
        </Toolbar>
      </AppBar>
      <SideMenu
        open={openLeftMenu}
        onOpen={handleSidebarOpen}
        onClose={handleSidebarClose}
      />
    </>
  );
}
