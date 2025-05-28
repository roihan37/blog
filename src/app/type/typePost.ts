export interface Post {
    _id: string;
    mainImage: {
        _type: string;
        asset: {
            [key: string]: any;
        };
    };
    publishedAt: string;
    slug: {
        _type: string;
        current: string;
    };
    title: string;
    description: string;
}