export default function PageLink({children, href, className}: {children: React.ReactNode, href: string, className?: string}) {
    return(
        <a 
            href={href}
            className={className}
            onClick={(e) => {
                e.preventDefault();
                document.getElementById(href.substring(1))?.scrollIntoView({ behavior: "smooth" });
            }}
        >
            {children}
        </a>
    );
}