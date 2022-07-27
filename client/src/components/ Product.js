import React from "react";
import "../CSS/product.css";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import img1 from "../asset/products/image-aqua.png";

class Product extends React.Component {
  render() {
    return (
      <>
        <h2>Popular Product</h2>
        <hr />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img src={img1} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Photosdsgasdgasgaerg"
            secondary="Jan 9, 2014"
          />
        </ListItem>
      </>
    );
  }
}

export default Product;