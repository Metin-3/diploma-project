import MainRoot from "../components/MainRoot";
import About from "../page/About";
import Blog from "../page/Blog";
import ComingSoon from "../page/ComingSoon";
import Contact from "../page/Contact";
import Events from "../page/Events";
import Features from "../page/Features";
import Gallery from "../page/Gallery";
import Home from "../page/Home";
import HomeCoffee from "../page/HomeCoffee";
import LeftSidebar from "../page/LeftSidebar";
import Menu from "../page/Menu";
import Reservation from "../page/Reservation";
import RightSidebar from "../page/RightSidebar";
import Shop from "../page/Shop";



const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: 'homecoffee',
                element: <HomeCoffee />
            },
            {
                path: "menu",
                element: <Menu />
            },
            {
                path: "events",
                element: <Events />
            },
            {
                path: "reservation",
                element: <Reservation />
            },
            {
                path: "features",
                element: <Features />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "gallery",
                element: <Gallery />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "leftsidebar",
                element: <LeftSidebar />
            },
            {
                path: "rightsidebar",
                element: <RightSidebar />
            },
            {
                path: "coming",
                element: <ComingSoon />
            },
            {
                path: "shop",
                element: <Shop />
            },
            {
                path: "blog",
                element: <Blog />
            }
        ]
    }
]


export default ROUTES