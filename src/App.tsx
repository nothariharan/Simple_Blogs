import { IoMdAddCircle } from "react-icons/io"
import Navigation from "./components/Navigation"
import PeopleToFollow from "./components/PeopleToFollow"
import TopicsList from "./components/TopicsList"
import TrendsList from "./components/TrendsList"
import { BlogProvider } from "./shared/BlogContext"
import { useState } from "react"
import { Blog } from "./types"

const App = () => {
  const [isModalOpen,setModalOpen] = useState(false)
  const [editingBlog,setEditingBlog] = useState<Blog | null>(null)
  const openModalforNewBlog = () => {
    setEditingBlog(null)
    setModalOpen(true)
  }

  const openModalForEditing = () => {
    setEditingBlog(blog)
    setModalOpen(true)
  }
  return (
    <div>
      <BlogProvider>
        <Navigation />
        <div className="flex justify-center">
          <section className="mx-auto p-6">
            <div>
              <button onClick={openModalforNewBlog} className="ml-[7rem] bg-black justify-center text-white px-4 py-2 rounded mb-4">Add New Blog <IoMdAddCircle className="ml-[.5rem]"/></button>
              {/*Article*/}
              {isModalOpen && <Modal></Modal>}
            </div>
          </section>
          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendsList />
            <TopicsList />
          </div>
        </div>
      </BlogProvider>
    </div>
  )
}

export default App