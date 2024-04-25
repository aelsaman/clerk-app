import Link from 'next/link';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';

const Header = ({ username }) => {
  // this hook now only works client side 
  // const { userId } = useAuth();

  return (
    <nav className='flex items-center justify-between px-6 py-4 mb-5 bg-blue-700'>
      <div className='flex items-center'>
        <Link href='/'>
          <div className='text-lg font-bold text-white uppercase'>
            Clerk App
          </div>
        </Link>
      </div>
      <div className='flex items-center text-white'>
        {/* {!userId && ( */}
        <SignedOut>
          <>
            <Link
              href='sign-in'
              className='text-gray-300 hover:text-white mr-4'
              >
              Sign In
            </Link>
            <Link
              href='sign-up'
              className='text-gray-300 hover:text-white mr-4'
              >
              Sign Up
            </Link>
          </>
        </SignedOut>
        {/* )} */}
        {/* {userId && ( */}
        <SignedIn>
          <Link href='profile' className='text-gray-300 hover:text-white mr-4'>
            Profile
          </Link>
        </SignedIn>
        {/* )} */}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </nav>
  );
};

export default Header;
