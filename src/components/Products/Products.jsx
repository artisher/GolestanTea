import Pistachios from "../Pistachios/Pistachios";
import "../Products/Products.css"
import Rice from "../Rice/Rice";
import Tea from "../Tea/Tea";
const Products = () => {
    return (
        <div>
            <div className="productsSection">
                <Rice />
                <Tea />
                <Pistachios/>
               
            </div>
        </div>
    );
}

export default Products;