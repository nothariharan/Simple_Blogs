import { useEffect, useState } from "react"
import { useBlogs } from "../shared/BlogContext"
import type { Blog } from "../types"

interface BlogFormProps{
    existingBlog?: Blog;
    onClose : () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({existingBlog,onClose}) => {
    const {addBlog,updateBlog} = useBlogs()
    const [title,setTitle] = useState(existingBlog?.title || '')
    const [description,setDescription] = useState(existingBlog?.description || '')
    const [image,setImage] = useState(existingBlog?.image || '')
    const [time,setTime] = useState(existingBlog?.time|| '')
    useEffect(() => {
        if(existingBlog) {
            setTime(existingBlog.time)
            setDescription(existingBlog.description)
            setTitle(existingBlog.title)
            setImage(existingBlog.image)
        }

    },[existingBlog])
  return (
    <div className="bg-white p-6 rounded-lg w-[30rem] mx-auto">
        <h3 className="font-semibold text-xl text-black"> {existingBlog? 'Edit Blog' : 'Add Blog'}</h3>
        <div className="space-y-4">
            <input type="text" placeholder="TItle" value={title} onChange={e =>  setTitle(e.target.value)} className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"/>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black resize-none h-32"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="date"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        </div>
    </div>
  )
}

export default BlogForm