export const Button = ({text, css}) => {
    return <div>
        <span className={`border rounded-full bg-black ${css} text-sm p-2 box-content px-6 mx-4 font-light `}>
            <a href="#">
                <button>{text}</button>
            </a>
        </span>
    </div>
}