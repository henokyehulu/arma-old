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
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col border-x">
      <Header categories={categories} />
      <main className="flex flex-1 flex-col px-4 py-8 pb-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
