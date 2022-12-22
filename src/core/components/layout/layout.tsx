export function Layout({ children }: { children: JSX.Element }) {
    return (
        <div className="container">
            <main>{children}</main>
        </div>
    );
}
