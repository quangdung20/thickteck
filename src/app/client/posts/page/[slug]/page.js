import Cta from '@components/Cta';
import GSAPWrapper from '@components/GSAPWrapper';
import Pagination from '@components/Pagination';
import config from '@config/config.json';
import { getListPage, getSinglePage } from '@lib/contentParser';
import Post from '@partials/Post';
import SeoMeta from '@partials/SeoMeta';

import Banner from '@/components/Banner';

const { blog_folder } = config.settings;

// blog pagination
const BlogPagination = async ({ params }) => {
  //
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const posts = await getSinglePage(`src/content/${blog_folder}`);
  const postIndex = await getListPage(`src/content/${blog_folder}/_index.md`);
  //
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const { frontmatter } = postIndex;
  const { title } = frontmatter;

  return (
    <GSAPWrapper>
      <SeoMeta title={title} />
      <section className="section pt-0">
        <Banner title={title} />
        <div className="container">
          <div className="row justify-center pb-16 pt-20 ">
            {currentPosts.map((post, i) => (
              <div key={`key-${i}`} className="mb-8 lg:col-5">
                <Post post={post} />
              </div>
            ))}
          </div>
          <Pagination section={blog_folder} totalPages={totalPages} currentPage={currentPage} />
        </div>
      </section>
      {/* CTA */}
      <Cta />
    </GSAPWrapper>
  );
};

export default BlogPagination;

export async function generateStaticParams() {
  const getAllSlug = await getSinglePage(`src/content/${blog_folder}`);
  const allSlug = getAllSlug.map((item) => item.slug);
  const { pagination } = config.settings;
  const totalPages = Math.ceil(allSlug.length / pagination);
  let paths = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      slug: (i + 1).toString(),
    });
  }

  return paths;
}
