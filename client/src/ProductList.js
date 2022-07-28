import React from "react";
import Product from "./components/ Product";
import "../src/CSS/App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import products from "./Data/seed";

class ProductList extends React.Component {
  render() {
    
    const productcompnents = products.map((productitems) => (
      <div className="App-header">
        <CssBaseline />
        <Container
          maxWidth="sm"
          sx={{ bgcolor: "#353b48", borderRadius: "10px" }}
        >
          <h2>Popular Product</h2>
          <hr />
          <Box sx={{ bgcolor: "#2f3640", height: "auto" }}>
            <Product
              id={productitems.id}
              title={productitems.title}
              description={productitems.description}
              url={productitems.url}
              votes={productitems.votes}
              submitteravatarurl={productitems.submitterAvatarUrl}
              productimageurl={productitems.productImageUrl}
            />
          </Box>
        </Container>
      </div>
    ));
    return productcompnents; 
  }
}

export default ProductList;
