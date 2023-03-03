import { PropsWithChildren } from "react";

export function SideBar({children}: PropsWithChildren){
    return(
        <div className="sidebar" style={{display: 'flex', flexDirection: 'row', width: '75%'}}>
            <div style={{marginLeft:"50px"}}>
                <div className="sidebar__main">
                    {children}
                </div>
            </div>
        </div>
    )
}