import { formatDate } from "../../utils/formatDate";

interface ICard{
    _id: string;
    display_date: string;
    promo_items?:{
        basic: {
           resized_urls: any[];
           subtitle: string;
           type: string;
           url: string;
        }
     };
    headlines:{
        basic: string;
     };
    subtype: string;
    taxonomy:{
        tags: {slug: string; text: string}[]
    };
    website_url: string;
}

export function Card({display_date, headlines, promo_items}: ICard){
    return(
        <article className="mod-caja-nota lugares w-100-mobile">
            <section id="" className="cont-figure">
                <a href="#" className="figure">
                    <picture id="" className="content-pic picture">
                        <img src={promo_items?.basic.url} alt="" className="content-img" />
                    </picture>
                </a>
            </section>
            <div className="mod-caja-nota__descrip">
                <h2 className="com-title-acu"><a href="#">{headlines.basic}</a></h2>
                <h4 className="com-date">{formatDate(display_date)}</h4>
            </div>
        </article>
    )
}