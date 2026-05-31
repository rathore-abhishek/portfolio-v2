import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "lexical";
import Image from "next/image";
import Container from "@/components/container";
import ShareButton from "./share-button";

interface BlogDetailProps {
  title: string;
  slug: string;
  content: SerializedEditorState;
  createdAt: string;
  image?: { url: string; alt?: string | null } | null;
  category?: { name: string; slug?: string } | null;
}

const BlogDetails = ({
  title,
  slug,
  content,
  createdAt,
  image,
  category,
}: BlogDetailProps) => {
  return (
    <Container className="flex-1 px-9">
      <article className="flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {category && (
                <span className="rounded-md border border-dashed border-black/20 px-2 py-0.5 text-xs font-medium text-black/50 dark:border-white/20 dark:text-white/50">
                  {category.name}
                </span>
              )}
              <span className="font-mono text-[10px] text-black/40 dark:text-white/30">
                {new Date(createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-3xl font-medium tracking-tight text-black dark:text-white">
              {title}
            </h1>
          </div>
          <ShareButton
            title={title}
            url={
              typeof window !== "undefined"
                ? window.location.href
                : `https://abhishekz.me/blogs/${slug}`
            }
          />
        </div>

        {image && (
          <div className="relative aspect-video overflow-hidden rounded-lg bg-black/5 dark:bg-white/5">
            <Image
              src={image.url}
              alt={image.alt ?? title}
              width={1200}
              height={675}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <RichText data={content} />
        </div>
      </article>
    </Container>
  );
};

export default BlogDetails;
