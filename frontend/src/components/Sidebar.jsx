import { 
  House,
  LogIn,
  UserPlus,
  User,
  Github,
  SearchCode,
  Heart,
  
} from "lucide-react"
import Logout from "./Logoutt"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"
import Profile from "./Profile"

const SIDEBAR_ITEMS = [
  { name: "Home", icon: House, color: "white", href: "/" },
  { name: "Login", icon: LogIn, color: "white", href: "/login" },
  { name: "Sign Up", icon: UserPlus, color: "white", href: "/signup" },
]

const SIDEBAR_ITEMS_AUTH = [
  { name: "Explore", icon: SearchCode, color: "white", href: "/explore" },
  { name: "Likes", icon: Heart, color: "white", href: "/likes" },
]

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const authUser = true
  return (
    <motion.div 
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-blue-950 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        
        {/* Header */}
        {isSidebarOpen ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-full hover:bg-blue-800 transition-colors bg-opacity-95 backdrop-blur-lg flex gap-1 items-center justify-center"
          >
            <Github size={30} />
            <h1 className="font-bold font-mono text-xl text-indigo-200">ez_repos</h1>
          </motion.button>
        ) : (
          <motion.button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-full hover:bg-blue-800 transition-colors bg-opacity-50 backdrop-blur-md flex gap-1 items-center justify-center"
          >
            <Github size={30} />
          </motion.button>
        )}

        {/* Navigation */}
        {authUser ? (
          <nav className="mt-8 flex flex-col justify-between flex-grow">
            {SIDEBAR_ITEMS_AUTH.map((item) => (
              <Link key={item.href} to={item.href}>
                <motion.div
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center p-4 text-md font-medium rounded-full hover:bg-blue-800 transition-colors mb-2"
                >
                  <item.icon size={25} style={{ color: item.color, minWidth: "25px" }} />
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.span 
                        className="ml-4 whitespace-nowrap"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            ))}

            {/* Bottom Section */}
            <div className="mt-auto">
              {/* Profile */}
              <div className="mb-2">
                <Link>
                  <Profile isSidebarOpen={isSidebarOpen} />
                </Link>
              </div>

              {/* Logout */}
              <div>
                <Logout isSidebarOpen={isSidebarOpen} />
              </div>
            </div>
          </nav>
        ) : (
          <nav className="mt-8 flex-grow">
            {SIDEBAR_ITEMS.map((item) => (
              <Link key={item.href} to={item.href}>
                <motion.div
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center p-4 text-md font-medium rounded-full hover:bg-blue-800 transition-colors mb-2"
                >
                  <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.span 
                        className="ml-4 whitespace-nowrap"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                      > 
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </motion.div>
  )
}

export default Sidebar
