"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import CountdownTimer from "./countdown";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4 py-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Coming Soon
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
        We're working hard to bring you something special!
      </p>
      <CountdownTimer />

      <form className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 max-w-lg mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-1"
          required
        />
        <Button type="submit" variant={"default"}>
          Notify Me
        </Button>
      </form>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 flex gap-2">
        Subscribe to get notified when we launch.
        <Link
          href="/main"
          className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
        >
          Sneak Peek
        </Link>
      </p>
      <div className="flex space-x-4 mt-8">
        <Link
          href="#"
          className="text-gray-900 dark:text-gray-100"
          prefetch={false}
        >
          <Facebook className="h-6 w-6" />
        </Link>
        <Link
          href="#"
          className="text-gray-900 dark:text-gray-100"
          prefetch={false}
        >
          <Twitter className="h-6 w-6" />
        </Link>
        <Link
          href="#"
          className="text-gray-900 dark:text-gray-100"
          prefetch={false}
        >
          <Instagram className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}
