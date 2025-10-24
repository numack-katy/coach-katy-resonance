export const metadata = {
  title: "Book Your Free Consultation | Coach Katy",
  description: "Schedule a free 30-minute consultation with Coach Katy. All clients start with a complimentary call to ensure we're a good fit for your coaching journey.",
  openGraph: {
    title: "Book Your Free Consultation | Coach Katy",
    description: "Schedule a free 30-minute consultation with Coach Katy. All clients start with a complimentary call to ensure we're a good fit for your coaching journey.",
    url: "https://coachkaty.help/brutalist-booking-dark",
    siteName: "Coach Katy",
    images: [
      {
        url: "https://coachkaty.help/katy1.webp",
        width: 1200,
        height: 630,
        alt: "Coach Katy - Neurodivergent Life Coach",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your Free Consultation | Coach Katy",
    description: "Schedule a free 30-minute consultation with Coach Katy. All clients start with a complimentary call to ensure we're a good fit for your coaching journey.",
    images: ["https://coachkaty.help/katy1.webp"],
  },
};

export default function BookingLayout({ children }) {
  return children;
}
