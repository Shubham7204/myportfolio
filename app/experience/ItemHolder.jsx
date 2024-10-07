export default function ItemHolder({ title, icon, children }) {
    return (
        <div className="md:m-6 m-3 md:p-2 p-1.5">
            <h3 className="md:text-4xl text-xl md:font-extrabold font-bold text-slate-200 md:my-6 my-3">{icon}{" "}{title}</h3>
            {children}
        </div>
    )
}
