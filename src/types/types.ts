
interface Image {
    url: string;
    alt: string;
}

interface PostFrontmatter {
    layout: string;
    title: string,
    pubDate: string,
    description: string,
    author: string,
    image: Image;
    tags: string[]
}

export type Post = {
    frontmatter: PostFrontmatter
}