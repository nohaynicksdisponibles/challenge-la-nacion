import { useContext } from "react"
import { provider } from "../../context";
import { filterByTag } from "../../utils/filterByTag";
import { Card } from "../Card"

interface IGrid{
    gridData?: any[];
    subtype?: number;
}

export function Grid({gridData, subtype = 7}: IGrid){
    const {data} = useContext(provider)

    return(
        <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade" style={{marginBottom: '150px'}}>
            {gridData?.filter(obj => Number(obj.subtype) === subtype).filter(obj => filterByTag(obj, data.tag)).map((data) => <Card {...data} />)}
            <div className="gradient"/>
            <div className="gradient-w">
                <div className="btn-gradient" style={{border: '1px solid #2596be', height: '30px', lineHeight: '30px', textAlign: 'center', width: '270px', margin: 'auto', borderRadius: '5px', position: 'absolute', bottom: '-80px', zIndex: 15000}}><p className="btn-gradient-text" style={{fontSize: 12, color: '#2596be', fontWeight: 'bold'}}>MÁS NOTAS DE ACUMULADO GRILLA</p></div>
            </div>
        </section>
    )
}

