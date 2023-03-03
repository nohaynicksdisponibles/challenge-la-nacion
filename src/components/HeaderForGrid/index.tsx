import { useContext } from "react";
import { provider } from "../../context";
import { tagCounter } from "../../utils/tagCounter";

interface IHeaderForGrid{
    tagsData: {slug: string; text:string; count?:number}[];
    count?: number
}

export function HeaderForGrid({tagsData, count=10}: IHeaderForGrid){
    const {setData} = useContext(provider)
    return(
        <>
            <div className="row header-for-grid">
                <div className="com-titleWithfollow hlp-marginBottom-15">
                    <h1 className="com-title-section-xl hlp-marginBottom-40">Acumulado Grilla</h1>
                </div>
            </div>
            <div className="row">
                <div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
                    {tagCounter(tagsData).slice(0,count).map((data) => <a href={`/tema/${data.slug}`} onClick={(e)=>{
                        e.preventDefault()
                        console.log(data.text)
                        setData(data.slug)}}>{data.text}</a>)}                
                </div>
            </div>
        </>
    )
}