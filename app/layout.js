import "../public/assets/css/styles.css";
import "swiper/css";
import "jarallax/dist/jarallax.min.css";
import "swiper/css/effect-fade";
import "photoswipe/dist/photoswipe.css";
import "tippy.js/dist/tippy.css";
import SchemaMarkup from "@/components/common/SchemaMarkup";
import ClientLayout from "./ClientLayout";

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="no-mobile no-touch ">
      <head>
        <meta name="apple-mobile-web-app-title" content="Coach Katy" />
        <meta name="theme-color" content="#77599f" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <SchemaMarkup />
        <script
          src="https://backend-production-fcc5.up.railway.app/api/script.js"
          data-site-id="2"
          defer
        />
      </head>
      <body className="appear-animate body loaded">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
