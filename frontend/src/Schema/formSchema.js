import * as yup from 'yup';

const formSchema = yup
    .object()
    .shape({
        image: yup.string("Please enter a string value").required("Please fill it out"),
        foodName: yup.string("Please enter a string value").required("Please fill it out"),
        foodContent: yup.string("Please enter a string value").required("Please fill it out"),
        foodPrice: yup.number("Please enter a number value").required("Please fill it out"),

        drinkImage: yup.string("Please enter a string value").required("Please fill it out"),
        drinkName: yup.string("Please enter a string value").required("Please fill it out"),
        drinkContent: yup.string("Please enter a string value").required("Please fill it out"),
        drinkPrice: yup.number("Please enter a number value").required("Please fill it out"),

        chefImage: yup.string("Please enter a string value").required("Please fill it out"),
        chefName: yup.string("Please enter a string value").required("Please fill it out"),
        chefContent: yup.string("Please enter a string value").required("Please fill it out"),
        chefPrice: yup.number("Please enter a number value").required("Please fill it out"),

        cocktailImage: yup.string("Please enter a string value").required("Please fill it out"),
        cocktailName: yup.string("Please enter a string value").required("Please fill it out"),
        cocktailContent: yup.string("Please enter a string value").required("Please fill it out"),
        cocktailPrice: yup.number("Please enter a number value").required("Please fill it out"),

        dinnerImage: yup.string("Please enter a string value").required("Please fill it out"),
        dinnerName: yup.string("Please enter a string value").required("Please fill it out"),
        dinnerContent: yup.string("Please enter a string value").required("Please fill it out"),
        dinnerPrice: yup.number("Please enter a number value").required("Please fill it out"),

        breakfastImage: yup.string("Please enter a string value").required("Please fill it out"),
        breakfastName: yup.string("Please enter a string value").required("Please fill it out"),
        breakfastContent: yup.string("Please enter a string value").required("Please fill it out"),
        breakfastPrice: yup.number("Please enter a number value").required("Please fill it out"),

        eventImage: yup.string("Please enter a string value").required("Please fill it out"),
        eventName: yup.string("Please enter a string value").required("Please fill it out"),
        eventContent: yup.string("Please enter a string value").required("Please fill it out"),
        eventRead: yup.string("Please enter a string value").required("Please fill it out"),
        eventDate: yup.string("Please enter a string value").required("Please fill it out"),
        eventTimeStart: yup.string("Please enter a string value").required("Please fill it out"),
        eventTimeEnd: yup.string("Please enter a string value").required("Please fill it out"),
        eventLocation: yup.string("Please enter a string value").required("Please fill it out"),

        shopImage: yup.string("Please enter a string value").required("Please fill it out"),
        shopName: yup.string("Please enter a string value").required("Please fill it out"),
        shopPrice: yup.number("Please enter a number value").required("Please fill it out"),

        bakeryImage: yup.string("Please enter a string value").required("Please fill it out"),
        bakeryName: yup.string("Please enter a string value").required("Please fill it out"),
        bakeryPrice: yup.number("Please enter a number value").required("Please fill it out"),

        churraImage: yup.string("Please enter a string value").required("Please fill it out"),
        churraName: yup.string("Please enter a string value").required("Please fill it out"),
        churraPrice: yup.number("Please enter a number value").required("Please fill it out"),

        boothImage: yup.string("Please enter a string value").required("Please fill it out"),
        boothName: yup.string("Please enter a string value").required("Please fill it out"),
        boothPrice: yup.number("Please enter a number value").required("Please fill it out"),

        cartImage: yup.string("Please enter a string value").required("Please fill it out"),
        cartName: yup.string("Please enter a string value").required("Please fill it out"),
        cartPrice: yup.number("Please enter a number value").required("Please fill it out"),

        restaurantImage: yup.string("Please enter a string value").required("Please fill it out"),
        restaurantName: yup.string("Please enter a string value").required("Please fill it out"),
        restaurantPrice: yup.number("Please enter a number value").required("Please fill it out"),

        blogImage: yup.string("Please enter a string value").required("Please fill it out"),
        blogName: yup.string("Please enter a string value").required("Please fill it out"),
        blogContent: yup.string("Please enter a string value").required("Please fill it out"),
        blogMonth: yup.string("Please enter a string value").required("Please fill it out"),
        blogDay: yup.number("Please enter a number value").required("Please fill it out"),

        resImage: yup.string("Please enter a string value").required("Please fill it out"),

        tableImage: yup.string("Please enter a string value").required("Please fill it out"),

        guestImage: yup.string("Please enter a string value").required("Please fill it out"),

        messageName: yup.string("Please enter a string value").required("Please fill it out"),
        messageEmail: yup.string("Please enter a string value").required("Please fill it out"),
        messageSubject: yup.string("Please enter a string value").required("Please fill it out"),
        messageContent: yup.string("Please enter a string value").required("Please fill it out"),

    })
    .required();


export default formSchema;