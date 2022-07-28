import React from "react";
import "../CSS/product.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import img1 from "../../src/asset/avatars/daniel.jpg";
import img2 from "../asset/products/image-aqua.png";

class Product extends React.Component {
  render() {
    return (
      <>
        <Card
          sx={{
            maxWidth: 560,
            marginBottom: 5,
            marginTop: 5,
            bgcolor: "#dcdde1",
            borderRadius: 2,
          }}
        >
          <CardHeader
            avatar={<Avatar src={img1} aria-label="recipe"></Avatar>}
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={img2}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <IconButton>
            <ArrowDropUpIcon />
          </IconButton>
        </Card>
      </>
    );
  }
}

export default Product;