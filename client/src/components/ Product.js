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
            avatar={
              <Avatar
                src={this.props.submitteravatarurl}
                aria-label="recipe"
              ></Avatar>
            }
            title={this.props.title}
          />
          <CardMedia
            component="img"
            alt=""
            height="140"
            image={this.props.productimageurl}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {this.props.description}
            </Typography>
          </CardContent>
          {console.log(this.props.submitteravatarurl)}
          {console.log(this.props.productimageurl)}
          <IconButton>
            <ArrowDropUpIcon />
          </IconButton>
        </Card>
      </>
    );
  }
}

export default Product;