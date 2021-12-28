import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({
  id,
  description,
  price,
  stock,
  title,
  pictureUrl,
}) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 300, marginBottom: 5 }}>
      <CardMedia component="img" height="250" image={pictureUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {stock}
        </Typography>
      </CardContent>
      <CardActions
        class="marginTopNegativo"
        style={{ justifyContent: "center" }}
      >
        <Link to={`/Item/${id}`} style={{ textDecoration: "none" }}>
          <Button class="button" size="small">
            Ver Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
