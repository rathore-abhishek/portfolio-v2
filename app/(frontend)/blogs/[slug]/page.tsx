import type { Metadata } from "next";
import config from "@payload-config";
import { getPayload } from "payload";
import { notFound } from "next/navigation";
import Divider from "@/components/divider";
import Navbar from "./_components/navbar";
import BlogDetails from "./_components/blog-details";
import Footer from "@/components/sections/footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "blogs",
    depth: 1,
    where: { slug: { equals: slug } },
    select: { title: true },
  });

  const blog = docs[0] as Record<string, unknown> | undefined;
  if (!blog) return { title: "Blog Not Found" };

  return {
    title: `${blog.title} — Abhishek Rathore`,
    openGraph: {
      title: `${blog.title} — Abhishek Rathore`,
    },
  };
}

async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "blogs",
    depth: 2,
    where: { slug: { equals: slug } },
    select: {
      title: true,
      slug: true,
      content: true,
      createdAt: true,
      image: true,
      category: true,
    },
  });

  const blog = docs[0];
  if (!blog) notFound();

  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <Divider />
      <BlogDetails
        title={blog.title}
        slug={blog.slug}
        content={blog.content}
        createdAt={blog.createdAt}
        image={
          blog.image && typeof blog.image === "object"
            ? {
                url: (blog.image as { url: string }).url,
                alt: (blog.image as { alt?: string | null }).alt,
              }
            : null
        }
        category={
          blog.category && typeof blog.category === "object"
            ? {
                name: (blog.category as { name: string }).name,
                slug: (blog.category as { slug?: string }).slug,
              }
            : null
        }
      />
      <Divider />
      <Footer />
    </div>
  );
}

export default BlogPage;
