import {motion, AnimatePresence} from "framer-motion"
import { User } from "lucide-react"

const Profile = ({isSidebarOpen}) => {
  return (
    <motion.div
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center p-4 text-md font-medium rounded-lg backdrop-blur-lg justify-center hover:bg-blue-800 transition-colors"
    >
        <User size={25} style={{ color: "white", minWidth: "25px" }} />
        <AnimatePresence>
        {isSidebarOpen && (
            <motion.span 
            className="ml-2 whitespace-nowrap"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            > 
            Profile
            </motion.span>
        )}
        </AnimatePresence>
    </motion.div>
  )
}

export default Profile