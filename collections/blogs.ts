import type { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  labels: {
    singular: "Blog",
    plural: "Blogs",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["image", "title", "category", "status", "createdAt"],
    group: "Content",
    description: "Blog posts and articles",
    listSearchableFields: ["title", "slug", "description"],
  },
  versions: {
    drafts: {
      autosave: false,
    },
  },
  defaultSort: "-createdAt",
  timestamps: true,
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      index: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      index: true,
      required: true,
      admin: {
        components: {
          Field: {
            path: "/components/payload/slug-field.tsx",
            exportName: "SlugField",
            clientProps: {
              fieldName: "title",
            },
          },
        },
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: false,
      admin: {
        description: "Featured image for the blog post",
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "blogs-categories",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          label: "Draft",
          value: "draft",
        },
        {
          label: "Published",
          value: "published",
        },
      ],
      defaultValue: "draft",
      admin: {
        position: "sidebar",
      },
    },
  ],
};
