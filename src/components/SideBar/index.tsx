import { PropsWithChildren } from "react";

export default function SideBar({children}: PropsWithChildren){
    return(
        <div className="sidebar" style={{display: 'flex', flexDirection: 'row', width: '75%'}}>
            <div style={{marginLeft:"50px"}}>
                <div className="sidebar__main" data-testid="sidebar">
                    {children}
                </div>
            </div>
        </div>
    )
}