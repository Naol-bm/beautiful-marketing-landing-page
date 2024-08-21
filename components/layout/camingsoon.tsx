"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4 py-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Coming Soon
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8">
        We're launching our new{" "}
        <span className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
          APP
        </span>{" "}
        in
      </p>
      <div className="flex space-x-4 mb-8">
        {/* <div>
          <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            12
          </div>
          <div className="text-gray-500 dark:text-gray-400">Days</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            08
          </div>
          <div className="text-gray-500 dark:text-gray-400">Hours</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            25
          </div>
          <div className="text-gray-500 dark:text-gray-400">Minutes</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            42
          </div>
          <div className="text-gray-500 dark:text-gray-400">Seconds</div>
        </div> */}
        God Knows When
      </div>
      <form className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 max-w-lg mx-auto">
        <Input type="email" placeholder="Enter your email" className="flex-1" />
        <Button type="submit" variant={"default"}>
          Subscribe
        </Button>
      </form>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 flex gap-2">
        Subscribe to get notified when we launch.
        <Link href="/main" className="text-primary">
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
