import React from 'react';

const InfoBox = (props) => {
    const parent = {
        width: "600px",
        margin: "50px"
    }
    const info = {
        padding: "10%",
        height: "150px",
        marginBottom: "-10px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
    }
    const words = {
        gridColumn: "1/2"
    }
    const img = {
        height: "200px",
        marginTop: "-20px"
    }

    const backgroundColors = ["rgb(229, 189, 66)", "rgb(243, 78, 44)", "rgb(178, 210, 91)", "rgb(84, 120, 23)", "rgb(170, 212, 222)", "rgb(35, 90, 173)", "rgb(227, 189, 225)", "rgb(175, 75, 142)", "rgb(191, 111, 111)", "rgb(160, 54, 13)"]

    const mappedInfoBoxes = backgroundColors.map((backgroundColor, i) => {
        return (
            <div style={parent} key={backgroundColor + i}>
                <div  style={{...info, backgroundColor}} >
                    <div style={words}>
                        <div className="title">Title: {props.title}</div>
                        <div className="subtitle">Subtitle: {props.subtitle}</div>
                        <div className="info">Info: {props.info}</div>
                    </div>
                    <img style={img} src="https://www.dpsgproductfacts.com/smedia/dpsgproductfacts.com/www/product_images/medium/YOOHOO_CHOCOLATE_DRINK_CANBOTTLE_11.png" alt=""/>
                </div>
            </div>
        )
    })

    return(
        <div>
            {mappedInfoBoxes}
        </div>
    )
}

export default InfoBox;