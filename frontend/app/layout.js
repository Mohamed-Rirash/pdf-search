import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter as FontSans } from "next/font/google";
import { ModeToggle } from "@components/ModeToggle";
import { cn } from "../lib/utils";
import Provider from "@components/Provider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata = {
  title: "PDF Text Search",
  description:
    " Effortlessly search for specific phrases or words within your PDF documents, enhancing productivity and information accessibility.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Provider>
            <div className=" absolute right-0 flex justify-end py-2 px-4">
              {" "}
              <ModeToggle />
            </div>
            {children}
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
