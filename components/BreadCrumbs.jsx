import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BreadCrumbs = (props) => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter((segment) => segment !== '');

  return (
    <nav aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={index}>
            <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
              <a>{segment}</a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default BreadCrumbs;
