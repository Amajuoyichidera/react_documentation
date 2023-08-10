function Parent({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}

export default function Child() {
    return (
        <Parent>
            <h1>Obi</h1>
        </Parent>
    )
}