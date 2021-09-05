import "./App.css";
import ProductList from "./components/productList/productList";
import ProductsTable from "./components/productsTable/productsTable";
import { connect } from "react-redux";
function App({ selectItems }) {
  return (
    <div className="container">
      <ProductList />
      {selectItems.length !== 0 ? <ProductsTable /> : ""}
    </div>
  );
}
const mapStateToProps = (state) => {
  const { selectedProducts } = state;

  const selectItems = selectedProducts.selectItems;

  return { selectItems };
};

export default connect(mapStateToProps)(App);
