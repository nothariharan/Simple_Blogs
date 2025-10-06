const trends = [
  {
    title: "Be the Person You Are on Vacation",
    author: "Maren Torff",
  },
  {
    title: "Hate NFTs? I have some bad news...",
    author: "Zain Levin",
  },
  {
    title: "The real impact of dark UX patterns",
    author: "Lindsey Curtis",
  },
];
const TrendsList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8">
        <h3 className="font-semibold text-lg mb-4">Top Trends</h3>
        <ul className="space-y-4">
            {trends.map((trends,index)=>(
                <li key={index} className="flex flex-col">
                    <span className="text-lg font-semibold">{trends.title}</span>
                    <span > Author: {trends.author} </span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TrendsList