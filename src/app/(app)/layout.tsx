import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import { api } from "@/trpc/server";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  const categories = await api.category.index.query();
  return (
    <div className="flex flex-col max-w-6xl min-h-screen mx-auto border-x">
      <Header categories={categories} />
      <main className="flex flex-col flex-1 px-4 py-8 pb-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
