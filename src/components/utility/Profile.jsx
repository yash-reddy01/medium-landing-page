export const Profile = ({ name, icon, css }) => {
    return <div className={`border border-black flex w-64 py-4 mx-3 border-l-0 border-r-0 text-xl h-auto w-auto ${css}`}>
        <div className="rounded-full border border-black mx-2"><img src={icon} alt="" className="" width={40}/></div>
        <div>{name}</div> 
    </div>
}