import { Inter } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import Layout from "./components/Layout"; // Import your layout component
import { StateContext } from "../../context/StateContext";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };


export default function RootLayout({ children}) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <StateContext>
          <Toaster />
          <Layout>{children}
          <Analytics />
          </Layout>
         
        </StateContext>
      </body>
    </html>

  );
}
