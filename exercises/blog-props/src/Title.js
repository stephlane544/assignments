import React from 'react';

const Title = () => {
    const container = {
        gridColumn:'1/2',
        gridRow: '2/3',
        textAlign:'center',
        height: '300px'
    }
    
    return(
        <div style={container}>
            <div style={{fontSize:'80px', lineHeight: '96px', color: '#fff', marginTop: '130px'}}>Clean Blog</div>
            <div style={{fontSize:'24px', lineHeight: '26.4px', color: '#fff'}}>A Blog Theme by Start Bootstrap</div>
        </div>
    )
}

export default Title;