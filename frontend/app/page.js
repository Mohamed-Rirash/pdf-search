"use client";

import { Button } from "@components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="">
     
      <div className="flex min-h-screen ">
        <div className="m-auto text-center p-4">
          <h1 className=" text-5xl sm:text-6xl font-extrabold text-blue-500 mb-4 leading-tight">
            <span className="">PDF Text Search</span>
          </h1>
          <p className="text-md sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto">
            Effortlessly search for specific phrases or words within your PDF
            documents, enhancing productivity and information accessibility.
          </p>
          <div className="space-x-4">
            <Button
              onClick={() => router.push("/search")}
              className="text-xl py-6 px-6 bg-blue-500 hover:bg-blue-700"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
