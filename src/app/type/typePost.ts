export interface Post {
    _id: string;
    mainImage: {
        _type: string;
        asset: {
            [key: string]: any;
        },
        alt: string;
    };
    publishedAt: string;
    slug: {
        _type: string;
        current: string;
    };
    title: string;
    description: string,
    body : []
}