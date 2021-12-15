import { Route } from "react-router-dom";
import Event from "./Event";

function NavList() {
    const routeTo = (path, componentDisplayed) => (
        <Route exact path={path} component={componentDisplayed} />
      );
    return(
    <main>
        
        {routeTo("/", Event)}
        {routeTo("/lenouveaumonde", Event)}
    </main>
    );
}

export default NavList;