export default function PageContainer({ title, children }) {
    return (
        <div className="bg-slate-800 bg-opacity-75 md:px-8 px-3.5 md:pt-10 pt-5 pb-1 mb-8 mt-16 rounded-xl">
            <h1 className="md:text-6xl text-2xl font-extrabold text-center text-slate-50">{title}</h1>
            {children}
        </div>
    )
}