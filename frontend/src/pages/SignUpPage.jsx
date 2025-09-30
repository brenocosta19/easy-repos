import { Github, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

function SignUpPage() {
  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 '>
      <div className='w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8 backdrop-filter backdrop-blur-xl bg-blue-950 bg-opacity-50 rounded-2xl shadow-xl gap-4 flex flex-col'>
          <h1 className='text-xl font-bold font-mono md:text-2xl text-center'>
            Create Account
          </h1>
					<button
						type='button'
						className='text-white bg-[#1c3552] hover:bg-[#24292F]/90 focus:ring-4
						focus:ring-[#24292F]/50 font-medium rounded-lg flex gap-2 p-2 items-center w-full 
						text-center justify-center '
						//onClick={handleLoginWithGithub}
					>
						<Github className='w-5 h-5' />
						Sign up with Github
					</button>
          <p className='text-gray-300 font-mono text-sm'>
            By signing up, you will unlock all the features of ez_repos!
            
          </p>
          <p className='text-sm font-bold text-gray-500 font-mono'>
            Already have an account?{" "}
            <Link to="/login" className='font-medium text-primary-600 hover:underline text-blue-600'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage