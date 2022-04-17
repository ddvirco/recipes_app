import FooterComp from "../Footer/footer";
import HeaderComp from "../Header/header";
import MenuComp from "../Menu/menu";
import RoutingComp from "../Routing/routing";
import "./layout.css";

function LayoutComp(){

    return(
    <div className="Layout">
         
        <header>
            <HeaderComp/>
        </header>
        <aside>
            <MenuComp />
        </aside>
        <main>
            {/* <MenuComp /> */}
            <RoutingComp />
        </main>
        <footer>
            <FooterComp />
        </footer>
        
    </div>)
}

export default LayoutComp