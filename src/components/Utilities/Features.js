import styled from "./Features.module.css"

export const Features = ({ text1, text2, type }) => {

    let included;

    switch (type) {
        case 'markii':
            included = <>
                <li><span>1x</span><p> Headphone Unit</p></li>
                <li><span>2x</span><p> Replacement Earcups</p></li>
                <li><span>1x</span><p>User Manual</p></li>
                <li><span>1x</span><p>3.5mm 5m Audio Cable</p></li>
                <li><span>1x</span><p>Travel Bag</p></li>
            </>
            break;
        case 'headphones':
            included = <>
                <li><span>1x</span><p> Headphone Unit</p></li>
                <li><span>2x</span><p> Replacement Earcups</p></li>
                <li><span>1x</span><p>User Manual</p></li>
                <li><span>1x</span><p>3.5mm 5m Audio Cable</p></li>
            </>
            break;
        case 'speakers':
            included = <>
                <li><span>2x</span><p> Speaker Unit</p></li>
                <li><span>2x</span><p> Speaker Cloth Panel</p></li>
                <li><span>1x</span><p>User Manual</p></li>
                <li><span>1x</span><p>3.5mm 5m Audio Cable</p></li>
                <li><span>1x</span><p>10m Optical Cable</p></li>
            </>
            break;
        case 'earphones':
            included = <>
                <li><span>2x</span><p> Earphone Unit</p></li>
                <li><span>2x</span><p> Multi-size Earplugs</p></li>
                <li><span>1x</span><p>User Manual</p></li>
                <li><span>1x</span><p>USB-C Charging Cable</p></li>
                <li><span>1x</span><p>Travel Pouch</p></li>
            </>
            break;

        default:
            break;
    }

    return (
        <section className={styled.section}>
            <div className={styled.container}>

                <div className={styled.heading}>
                    <h3 className={styled.feat}>Features</h3>

                    <div className={styled.p}>
                        <p>
                            {text1}
                        </p>
                        <br />
                        <p>
                            {text2}
                        </p>
                    </div>

                </div>

                <div className={styled.box}>
                    <h3>in the box</h3>
                    <ul className={styled.ul}>
                        {included}
                    </ul>
                </div>

            </div>
        </section>
    )
}
