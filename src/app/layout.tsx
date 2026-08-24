import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "tlk2me — the AI phone line for charter captains",
    template: "%s · tlk2me",
  },
  description:
    "tlk2me answers your phone, quotes your trips, and books them straight onto your Google Calendar. $29 per booking. Reschedules are free. You don't pay until it's on the calendar.",
  openGraph: {
    title: "tlk2me — the AI phone line for charter captains",
    description:
      "Answers every call, books the trip, syncs your calendar. $29 per booking, nothing until it's booked.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
