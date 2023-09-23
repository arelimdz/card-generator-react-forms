// 3 pages to link:
// / -- homepage
// /about/ -- about page 
// /about/contact --contactpage
import { Link } from "react-router-dom"

export default function NavBar(props){
    return(
        <nav>
            <h1>Nav bar</h1>
            <ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/about/contact">Contact</Link>
				</li>
			</ul>

        </nav>
    )
}
