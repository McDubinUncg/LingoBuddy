import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";

const Header = () => {
  const { userId } = auth();

  return (
    <>
      <nav className="bg-orange-400 py-4 px-6 flex items-center justify-between mb-0">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-lg font-bold text-blue-600" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>LingoBuddy</div>
          </Link>
        </div>
        <div className="flex-1 text-center">
          <Link
            href="/learningCourses"
            className="text-blue-600 mx-2 hover:text-gray-300 cursor-pointer" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}
          >
            Learning Courses
          </Link>
        </div>
        <div className="text-blue-600 flex items-center"style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
          {!userId && (
            <>
              <Link
                href="sign-in"
                className="text-blue-600 hover:text-blue mr-4" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}
              >
                Sign In
              </Link>
              <Link
                href="sign-up"
                className="text-blue-600 hover:text-blue mr-4" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}
              >
                Sign Up
              </Link>
            </>
          )}
          <div className="ml-auto">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>
    </>
  )

};

export default Header;
