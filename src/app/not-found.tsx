import Image from "next/image";
import Link from "next/link";
import NotFoundImage from '@/assets/error-404.png'

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray/10 px-4 py-16">
      <section className="max-w-lg rounded-2xl  p-8 text-center sm:p-12">
        <Image src={NotFoundImage} alt="Not found Image" height={360} width={360}></Image>
        <h1 className="mt-4 text-3xl font-bold text-dark">Oops,Page Not Found</h1>
        <p className="mt-3 text-gray">
          The page you are looking for is not found.
        </p>
        <Link href="/" className="btn bg-linear-to-br from-primary to-secondary mt-7 text-white">
          Back to Home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
