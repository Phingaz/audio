import styled from "./Infopictures.module.css"

export const InfoPictures = ({ image1, image2, image3 }) => {

    return (
        <section className={styled.section}>
            <div className={styled.container}>

                <div className={styled.info_pictures}>
                    <div className={styled.info1}>
                        <img
                            className={styled.info1}
                            src={image1} alt="" />
                    </div>
                    <div className={styled.info2}>

                        <img
                            className={styled.info2}
                            src={image2} alt="" />
                    </div>
                    <div className={styled.info3}>
                        <img
                            className={styled.info3}
                            src={image3} alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}
