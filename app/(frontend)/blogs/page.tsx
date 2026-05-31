import type { Metadata } from "next";
import Divider from "@/components/divider";
import Navbar from "./_components/navbar";
import BlogsSection from "./_components/blogs";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Blogs — Abhishek Rathore",
  description:
    "Thoughts on design, code, and building things from scratch.",
  openGraph: {
    title: "Blogs — Abhishek Rathore",
    description:
      "Thoughts on design, code, and building things from scratch.",
  },
};

const BlogsPage = () => {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <Divider />
      <BlogsSection />
      <Divider />
      <Footer />
    </div>
  );
};

export default BlogsPage;
