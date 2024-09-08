import { HomeIcon, TranslateIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Translate from "./pages/Translate.jsx";

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
    icon: <TranslateIcon className="h-4 w-4" />,
    page: <Translate />,
  },
];