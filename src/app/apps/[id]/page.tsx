import InstallButton from "@/components/AppDetails/InstallButton";
import getData from "@/lib/getData";
import { IApp } from "@/types/app.type";
import { Metadata } from "next";
import Image from "next/image";
import { FaDownload, FaStar } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";

export const generateMetadata = async ({
  params,
}: AppDetailsProps): Promise<Metadata> => {
  const { id } = await params;
  const data = await getData();

  const app = data.find((app: IApp) => app.id === Number(id));

  if (!app) {
    return {
      title: "App Not Found | Hero App",
      description: "This app could not be found.",
    };
  }

  return {
    title: `${app.title} | Hero App`,
    description: app.description,
  };
};

interface AppDetailsProps {
  params: {
    id: string;
  };
}

const AppDetails = async ({ params }: AppDetailsProps) => {
  const { id } = await params;
  const data = await getData();

  const app = data.find((app: IApp) => app.id === Number(id)) as IApp;
  const {
    title,
    image,
    description,
    downloads,
    ratingAvg,
    ratings,
    companyName,
    size,
  } = app;

  const totalReview: number =
    data.reduce((acc: number, app: IApp) => acc + app.reviews, 0) / 1000;
  return (
    <section className="mt-14 py-14 bg-gray/10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 px-4 lg:px-0">
        <div className="lg:col-span-3 flex justify-center items-center bg-white p-10 rounded-2xl">
          <Image
            src={image}
            alt={title}
            width={150}
            height={150}
            className="rounded-xl"
          ></Image>
        </div>
        <div className="lg:col-span-9 space-y-4 px-5 text-[#102a43]">
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>

            <p className="mt-2 text-xs text-gray-500">
              Developed by{" "}
              <span className="text-green text-[16px] font-semibold">
                {companyName}
              </span>
            </p>
          </div>

          <div className="my-4 h-px w-full bg-gray-300" />

          <div className="flex items-start gap-10 sm:gap-14">
            <div className="space-y-2">
              <FaDownload className="text-xl text-emerald-500" />
              <p className="mt-1 text-[10px] text-gray-500">Downloads</p>
              <p className="text-2xl font-bold">{downloads / 100}M</p>
            </div>

            <div className="space-y-2">
              <FaStar className="text-xl text-orange-500" />
              <p className="mt-1 text-[10px] text-gray-500">Average Ratings</p>
              <p className="text-2xl font-bold">{ratingAvg}</p>
            </div>

            <div className="space-y-2">
              <HiOutlineChartBar className="text-xl text-violet-500" />
              <p className="mt-1 text-[10px] text-gray-500">Total Reviews</p>
              <p className="text-2xl font-bold">{totalReview.toFixed(1)}M</p>
            </div>
          </div>

          <InstallButton app={app}/>
        </div>
      </div>

      {/* Ratings */}

      <div className=" container mx-auto mb-10">
        <section className="p-5 mt-10">
          <h2 className="mb-4 text-lg font-bold text-base-content">Ratings</h2>

          <div className="space-y-3">
            {ratings.map((rating) => (
              <div key={rating.count} className="flex items-center gap-4">
                <span className="w-10 text-xs text-base-content/60">
                  {rating.name}
                </span>

                <progress
                  className="progress progress-warning h-4 flex-1 rounded-none"
                  value={rating.count}
                  max={10200000}
                />
              </div>
            ))}
          </div>

          <div className="ml-14 mt-2 flex justify-between text-xs text-base-content/50">
            <span>0</span>
            <span>3000000</span>
            <span>6000000</span>
            <span>9000000</span>
            <span>12000000</span>
          </div>
        </section>
      </div>

      <hr className="text-gray/50" />

      {/* Description */}

      <div className="container mx-auto">
        <section className="p-5 mt-5">
          <h2 className="mb-4 text-lg font-bold text-base-content">
            Description
          </h2>
          <p className="text-gray font-medium text-xl">{description}</p>
        </section>
      </div>
    </section>
  );
};

export default AppDetails;
