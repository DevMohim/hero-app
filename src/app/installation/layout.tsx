import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hero App | Install Apps",
  description: "View and manage your installed applications.",
};

const InstallationLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return children;
};

export default InstallationLayout;
