import Card from "./Card"
import Graph from "./Graph"

const HomePage = () => {
    return (
        <section>
            <div className="p-10">
                <h1 className="font-medium text-4xl mb-3 text-white tracking-wide">
                    Hello,
                    <span className="bg-gradient-to-r from-green-300 to-yellow-500 inline-block text-transparent bg-clip-text">&nbsp;User</span>
                </h1>
                <p className="text-2xl mb-12 text-white tracking-wide">
                    Welcome to
                    <span className="text-green-500"> Spot trading !</span>
                </p>
            </div>
            <div className="w-full overflow-x-scroll px-10 hide-scrollbar">
                <Graph />
            </div>
            <div className="px-10 mt-12 mr-6">
                <h1 className="text-xl mb-4">Bitcoin</h1>
                <Card />
            </div>
        </section>
    )
}

export default HomePage
