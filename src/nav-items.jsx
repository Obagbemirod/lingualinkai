import { HomeIcon, Languages, Send, MessageCircle, BookOpen } from "lucide-react";
import Index from "./pages/Index.jsx";
import Translate from "./pages/Translate.jsx";
import Telegram from "./pages/Telegram.jsx";
import WhatsApp from "./pages/WhatsApp.jsx";
import LMS from "./pages/LMS.jsx";
import SignupLogin from "./pages/SignupLogin.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Translate",
    to: "/translate",
    icon: <Languages className="h-4 w-4" />,
    page: <Translate />,
  },
  {
    title: "Telegram",
    to: "/telegram",
    icon: <Send className="h-4 w-4" />,
    page: <Telegram />,
  },
  {
    title: "WhatsApp",
    to: "/whatsapp",
    icon: <MessageCircle className="h-4 w-4" />,
    page: <WhatsApp />,
  },
  {
    title: "LMS",
    to: "/lms",
    icon: <BookOpen className="h-4 w-4" />,
    page: <LMS />,
  },
  {
    title: "Signup/Login",
    to: "/signup-login",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <SignupLogin />,
  },
];