import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { IDrawerItem, IFilterData } from "./types";
import { View } from "react-native";

export const Filters_Sex = [
  {
    id: "male",
    title: "Male",
  },
  {
    id: "female",
    title: "Female",
  },
  {
    id: "yes",
    title: "Yes",
  },
  {
    id: "other",
    title: "Others",
  },
] as IFilterData[];

export const DRAWERITEM_CLIENT = [
  {
    icon: require("../assets/images/drawer/cart.svg"),
    label: "Reservations",
    url: "user/reservations",
    name: "reservations",
  },
  {
    icon : require("../assets/images/drawer/notifications.svg"),
    label: "Notification",
    url: "user/activities",
    name: "activities",
  },
  {
    icon : require("../assets/images/drawer/Users.svg"),
    label: "Profile",
    url: "user/profile",
    name: "profile",
  }
] as IDrawerItem[]

export const OPTIONS_RESERVATION_TYPE = [
  {
    id: "rtype_foodOnly",
    title: "Food Only",
    description:
      "Choose from our diverse selection of delicious dishes, add them to your cart, and set a date for when you'd like them to be served. Perfect for those who just need great food without the additional setup.",
    icon: require("../assets/images/reservation/types/type_food.svg"),
  },
  {
    id: "rtype_packageBase",
    title: "Package Based",
    description:
      "Enjoy a thoughtfully curated catering package tailored to suit any occasion. These packages include everything you need for a seamless event, from food to setup, ensuring a hassle-free dining experience.",
    icon: require("../assets/images/reservation/types/type_package.svg"),
  },
  {
    id: "rtype_perPax",
    title: "Per Pax",
    description:
      "Customize your catering experience based on the number of guests. Select your preferred menu, and we'll take care of the servings per person, making it simple and convenient for any gathering.",
    icon: require("../assets/images/reservation/types/type_pax.svg"),
  },
];

export const Locale_US_EN_MONTHS_SHORT = [
  "Jan",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
