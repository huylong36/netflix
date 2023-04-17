import { Layout } from '@/component/layout';
import { GetStaticPathsContext, GetStaticProps } from 'next';
import * as React from 'react';
export interface PostListPageProps {
    posts: any[];
}
export default function PostListPage(props: PostListPageProps) {
    return <>
        <Layout>
            Page list post
        </Layout>
    </>;
}
export const getStaticProps: GetStaticProps<PostListPageProps> = async (
    context: GetStaticPathsContext
) => {
    return {
        props: {
            posts: [],
        },
    };
};
