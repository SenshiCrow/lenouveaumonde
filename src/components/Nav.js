import React, {BrowserRouter as Router, Switch, NavLink} from "react-router-dom";
import Navlist from './NavList';
import Discord from '../assets/Discord.png';
import Twitch from '../assets/Twitch.png';
import Youtube from '../assets/Youtube.png';
import '../CSS/Nav.css'

function Nav() {
    const linkTo = (path, content) => (
        <NavLink activeClassName="current" className="link" exact to={path}>
          {content}
        </NavLink>
      );
    return(
        <div class="navDiv">
        <Router>
            <section class="mediaSection">
                <a  class="mediaLinks" href="https://discord.gg/lnm"><img class="discord" alt="discord" src={Discord}></img></a>
                <a class="mediaLinks" href="https://discord.gg/lnm"><img class="youtube" alt="youtube" src={Youtube}></img></a>
                <a class="mediaLinks" href="https://twitch.tv/lonelycrow_"><img class="twitch" alt="twitch" src={Twitch}></img></a>
            </section>
            <section class="navSection">
                <ul class="list">
                    <li>
                        {linkTo("/lenouveaumonde", "Accueil")}
                    </li>
                    <li>
                        {linkTo("/lenouveaumonde/boutique", "Boutique")} 
                    </li>
                    <li>
                        {linkTo("/lenouveaumonde/about", "A propos")} 
                    </li>
                    <li>
                        {linkTo("/lenouveaumonde/contact", "Contact")} 
                    </li>
                    <li>
                        {linkTo("/lenouveaumonde/partenaires", "Partenaires")}
                    </li>
                </ul>
            </section>

        <Switch>
            <Navlist />
        </Switch>

        </Router>
        </div>
    );
}

export default Nav;