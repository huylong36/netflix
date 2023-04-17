import { LayoutProps } from "@/models/index";

export function Layout({children}:LayoutProps){
    return(
        <div>
            <h1>Main Layout</h1>

            
            <div>{children}</div>
        </div>
    )
}