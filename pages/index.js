import { useRouter } from 'next/router';

const mainPageUri = '/portfolios/langsup';

export default function RedirectPage() {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    router.push(mainPageUri);
    return;
  }
}

RedirectPage.getInitialProps = (ctx) => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: mainPageUri });
    ctx.res.end();
  }
  return {};
};
