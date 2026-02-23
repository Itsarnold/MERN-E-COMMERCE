
const Categories = () => {

    const tabs = [
        { id: "1", label: "Fashion", },
        { id: "2", label: "Electronics", },
        { id: "3", label: "Textile", },
        { id: "4", label: "Beverages", },
        { id: "5", label: "Stationary", },
        { id: "6", label: "Cosmetics", },
        { id: "7", label: "Fabrics", },
        { id: "8", label: "Jewelerry", }
    ]

    return(
        <nav className="flex justify-center gap-2 mb-4">
            {tabs.map((tab) => (
                <div
                 className="flex justify-center items-center"
                 key={tab.id}>
                    <button className="cursor-pointer border rounded-xl p-3 font-medium border-amber-400 px-3 bg-[#3fcb96] hover:bg-[#2de09c]">
                        {tab.label}
                    </button>
                </div>
            ))}
        </nav>
    )
}

export default Categories

