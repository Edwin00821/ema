import { Error404 } from 'components/Error';
import Head from 'next/head';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <Head>
        <title>{'Error 404'}</title>
        <meta name='description' content={'Error 404'} />
        <meta name='og:title' content={'Error 404'} />
        <meta name='og:description' content={'Error 404'} />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Error404>
        <Link href='/'>
          <a className='text-lg font-bold underline decoration-wavy '>
            Go back home
          </a>
        </Link>
      </Error404>
    </div>
  );
}
