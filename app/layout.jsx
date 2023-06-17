import Link from "next/link";
import "./globals.css";
import { Raleway } from "next/font/google";
import Mute from "./components/mute";
import { AppContextProvider } from "./context";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
    title: "Focus",
    description: "Sounds Good, Focus Better",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <AppContextProvider>
                <body className={inter.className}>
                    <nav className="h-20 w-full px-7 shadow-sm flex items-center justify-between fixed top-0 left-0">
                        <ul>
                            <li>
                                <Link href={"/"}>
                                    <h1 className="text-2xl font-medium">Focus</h1>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Mute />
                            </li>
                        </ul>
                    </nav>
                    {children}
                </body>
            </AppContextProvider>
        </html>
    );
}
