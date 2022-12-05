

export const MiniNav = () => {
    return (
        <>
            <section className="flex gap-6 items-center overflow-x-scroll px-6 border-b pb-4 border-slate-600 w-full text-xs md:text-sm">
                <div className="bg-slate-600 text-white font-medium px-6 md:px-8 py-2 md:py-3 rounded-lg">All</div>
                <div className="bg-slate-600 text-white font-medium px-6 md:px-8 py-2 md:py-3 rounded-lg flex-none">DJ Mixes</div>
                <div className="bg-slate-600 text-white font-medium px-6 md:px-8 py-2 md:py-3 rounded-lg">Movies</div>
                <div className="bg-slate-600 text-white font-medium px-6 md:px-8 py-2 md:py-3 rounded-lg">Nollywod</div>
                <div className="bg-slate-600 text-white font-medium px-6 md:px-8 py-2 md:py-3 rounded-lg">Hollywood</div>
                <div className="bg-slate-600 text-white font-medium px-6 md:px-8 py-2 md:py-3 rounded-lg flex-none">Live Video</div>
                <div className="bg-slate-600 text-white font-medium px-6 md:px-8 py-2 md:py-3 rounded-lg">News</div>
                <div className="bg-slate-600 text-white font-medium px-6 md:px-8 py-2 md:py-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rotate-90 w-4 h-4 md:w-6 md:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </section>
        </>
    )
}