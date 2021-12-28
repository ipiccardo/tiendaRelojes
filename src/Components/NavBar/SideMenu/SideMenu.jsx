import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";

const iOS =
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

const drawerWidth = 220;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function SideMenu({ open, onOpen, onClose }) {
  const theme = useTheme();

  const categories = [
    {
      CategoryId: "Analogico",
    },
    {
      CategoryId: "Digital",
    },
    {
      CategoryId: "Inteligente",
    },
  ];

  return (
    <SwipeableDrawer
      color="primary"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#0E1439",
          color: "#ff3939",
        },
      }}
      anchor="left"
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <DrawerHeader>
        <IconButton onClick={onClose} sx={{ color: "#ff3939" }}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />
      <List>
        <Link
          onClick={onClose}
          to="/"
          key="home"
          style={{ textDecoration: "none", color: "#ff3939" }}
        >
          <ListItem button key="home">
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
      </List>
      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />
      <List>
        {categories.map(({ CategoryId }) => (
          <Link
            onClick={onClose}
            to={`/category/${CategoryId}`}
            key={CategoryId}
            style={{ textDecoration: "none", color: "#ff3939" }}
          >
            <ListItem button>
              <ListItemText primary={CategoryId} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />
    </SwipeableDrawer>
  );
}

export default SideMenu;
