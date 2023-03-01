import AdminRoot from "../components/AdminRoot";
import MainRoot from "../components/MainRoot";
import About from "../page/About";
import AdminBlog from "../page/Admin/components/Blog/AdminBlog";
import AdminBreakfast from "../page/Admin/components/Breakfast/AdminBreakfast";
import AdminChef from "../page/Admin/components/Chef/AdminChef";
import AdminCocktail from "../page/Admin/components/Cocktail/AdminCocktail";
import AdminDinner from "../page/Admin/components/Dinner/AdminDinner";
import AdminDrink from "../page/Admin/components/Drink/AdminDrink";
import AdminEvent from "../page/Admin/components/Event/AdminEvent";
import AdminGuest from "../page/Admin/components/Gallery/AdminGuest";
import AdminRes from "../page/Admin/components/Gallery/AdminRes";
import AdminTable from "../page/Admin/components/Gallery/AdminTable";
import AdminMenu from "../page/Admin/components/Menu/AdminMenu";
import AdminMessage from "../page/Admin/components/Message/AdminMessage";
import AdminShop from "../page/Admin/components/Shop/AdminShop";
import BakeryShop from "../page/Admin/components/Shop/BakeryShop";
import BoothShop from "../page/Admin/components/Shop/BoothShop";
import CartShop from "../page/Admin/components/Shop/CartShop";
import ChurraShop from "../page/Admin/components/Shop/ChurraShop";
import RestaurantShop from "../page/Admin/components/Shop/RestaurantShop";
import Blog from "../page/Blog";
import ComingSoon from "../page/ComingSoon";
import Contact from "../page/Contact";
import Detail from "../page/Detail";
import Events from "../page/Events";
import Features from "../page/Features";
import Gallery from "../page/Gallery";
import Home from "../page/Home";
import HomeCoffee from "../page/HomeCoffee";
import HomeOne from "../page/HomeOne";
import HomeSeafood from "../page/HomeSeafood";
import HomeVideo from "../page/HomeVideo";
import HomeWinery from "../page/HomeWinery";
import LeftSidebar from "../page/LeftSidebar";
import LoginUser from "../page/LoginUser";
import Menu from "../page/Menu";
import NotFound from "../page/NotFound";
import RegisterUser from "../page/RegisterUser";
import Reservation from "../page/Reservation";
import ReservationForm from "../page/ReservationForm";
import RightSidebar from "../page/RightSidebar";
import Shop from "../page/Shop";
import ShopDetail from "../page/ShopDetail";



const ROUTES = [
    {
        path: "*",
        element: <NotFound />
    },
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
                path: 'homeseafood',
                element: <HomeSeafood />
            },
            {
                path: "homeWinery",
                element: <HomeWinery />
            },
            {
                path: "homeOne",
                element: <HomeOne />
            },
            {
                path: "homeVideo",
                element: <HomeVideo />
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
                path: "events/:id",
                element: <Detail />
            },
            {
                path: "reservation",
                element: <Reservation />
            },
            {
                path: "reservationForm",
                element: <ReservationForm />
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
                path: "shop/:id",
                element: <ShopDetail />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "admin",
                element: <LoginUser />
            },
            {
                path: "register",
                element: <RegisterUser />
            }
        ]
    },
    {
        path: "admin",
        element: <AdminRoot />,
        children: [
            {
                path: "adminMenu",
                element: <AdminMenu />
            },
            {
                path: "adminDrink",
                element: <AdminDrink />
            },
            {
                path: "adminChef",
                element: <AdminChef />
            },
            {
                path: "adminCocktail",
                element: <AdminCocktail />
            },
            {
                path: "adminDinner",
                element: <AdminDinner />
            },
            {
                path: "adminBreakfast",
                element: <AdminBreakfast />
            },
            {
                path: "adminEvent",
                element: <AdminEvent />
            },
            {
                path: "adminShop",
                element: <AdminShop />
            },
            {
                path: "adminBakery",
                element: <BakeryShop />
            },
            {
                path: "adminChurra",
                element: <ChurraShop />
            },
            {
                path: "adminBooth",
                element: <BoothShop />
            },
            {
                path: "adminCart",
                element: <CartShop />
            },
            {
                path: "adminRestaurant",
                element: <RestaurantShop />
            },
            {
                path: "adminBlog",
                element: <AdminBlog />
            },
            {
                path: "adminRes",
                element: <AdminRes />
            },
            {
                path: "adminTable",
                element: <AdminTable />
            },
            {
                path: "adminGuest",
                element: <AdminGuest />
            },
            {
                path: "adminMessage",
                element: <AdminMessage />
            }
        ]
    }
]


export default ROUTES