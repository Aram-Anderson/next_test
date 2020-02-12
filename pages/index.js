import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Link href='/about'>
        <a>about page</a>
      </Link>
      <p>Hello Next</p>
    </div>
  )
}
