import { createBrowserRouter, Outlet } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import WhyAvantePage from "./pages/WhyAvantePage.tsx";
import LibraryPage from "./pages/LibraryPage.tsx";
import { LanguageProvider } from "@/app/hooks/useLanguage";

// Layout wrapper to provide context to all routes
function RootLayout() {
  return (
    <LanguageProvider>
      <Outlet />
    </LanguageProvider>
  );
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/why-avante",
        element: <WhyAvantePage />
      },
      {
        path: "/library",
        element: <LibraryPage />
      }
    ]
  }
]);