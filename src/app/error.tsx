'use client'
import Image from "next/image";
import Link from "next/link";
import NotFoundImage from "@/assets/App-Error.png";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray/10 px-4 py-16">
      <section className="max-w-lg rounded-2xl  p-8 text-center sm:p-12">
        <Image
          src={NotFoundImage}
          alt="Not found Image"
          height={360}
          width={360}
          className="mx-auto"
        ></Image>
        <h1 className="mt-4 text-3xl font-bold text-dark uppercase">
          Oops!! Apps Not Found
        </h1>
        <p className="mt-3 text-gray">
          The App you are requesting is not found on our system. please try
          another apps.
        </p>
        <Link
          href="/"
          className="btn bg-linear-to-br from-primary to-secondary mt-7 text-white"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
