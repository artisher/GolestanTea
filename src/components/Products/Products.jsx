import Pistachios from "../Pistachios/Pistachios";
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