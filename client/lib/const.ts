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

export const DRAWERITEM_ADMIN = [
  {
    icon: require("../assets/images/drawer/Home.svg"),
    label: "Dashboard",
    url: "admin/dashboard",
    name: "dashboard",
  },
  {
    icon: require("../assets/images/drawer/Users.svg"),
    label: "Manage Accounts",
    url: "admin/manageaccounts",
    name: "manageaccounts",
  },
  {
    icon: require("../assets/images/drawer/entries.svg"),
    label: "Manage Reservations",
    url: "admin/managereservations",
    name: "managereservations",
  },
  {
    icon: require("../assets/images/drawer/Coffee.svg"),
    label: "Manage Food Menus",
    url: "admin/managefoods",
    name: "managefoods",
  },
  {
    icon: require("../assets/images/drawer/card.svg"),
    label: "Manage Finance",
    url: "admin/managefinance",
    name: "managefinance",
  },
  {
    icon: require("../assets/images/drawer/trend.svg"),
    label: "Finance Analytics",
    url: "admin/financeanalytics",
    name: "financeanalytics",
  },
  {
    icon: require("../assets/images/drawer/ThumbsUp.svg"),
    label: "Customer Feedbacks",
    url: "admin/customerfeedbacks",
    name: "customerfeedbacks",
  },
  {
    icon: require("../assets/images/drawer/Edit.svg"),
    label: "Manage Announcement",
    url: "admin/manageannouncements",
    name: "manageannouncements",
  },
  {
    icon: require("../assets/images/drawer/cart.svg"),
    label: "Transaction History",
    url: "admin/transactionhistory",
    name: "transactionhistory",
  },
  {
    icon: require("../assets/images/drawer/Activity.svg"),
    label: "Activity Logs",
    url: "admin/activitylogs",
    name: "activitylogs",
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
