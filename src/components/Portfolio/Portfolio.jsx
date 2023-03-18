import React from 'react'
import './Portfolio.css'
const Portfolio = () => {
  
    const data=[
      {id:1,
      
        title:'NEIghborING',
        description:'where you can get to know about food attraction weather around you',
        github:'https://github.com/Tanmoy001/Text-Modifier',
        demo:'https://635f909c1beb547f6300e782--dapper-sopapillas-8765b6.netlify.app/'
      
    },
    {id:2,
      title:'CoinCom',
      description:'CoinCom will give you update about your digital coin and shares',
      github:'https://github.com/Tanmoy001/Text-Modifier',
      demo:'https://635f909c1beb547f6300e782--dapper-sopapillas-8765b6.netlify.app/'
    },
    {id:3,
      title:'Text Modifier',
      description:'This is a text modifier where you can edit your text',
      github:'https://github.com/Tanmoy001/Text-Modifier',
      demo:'https://635f909c1beb547f6300e782--dapper-sopapillas-8765b6.netlify.app/'
      
    }
    ]
    return (
    <section id='portfolio'>
       <h5>My recent work</h5>
      <h2>Portfolio</h2>
      {/* <div className='container protfolio_container'>
        { data.map(({id, image, title, github, demo})=>{
          return(
        <div key={id}className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={image}alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className='portfolio_item-cta'>
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary'>Live Demo</a>
          </div>
        </div>
          )
      })}
        </div> */}
        <div className='portfolio_content'>
              { data.map(({id, description, title, github, demo})=>{
          return(
       <div class="container">
        <div class="drop">
            <div class="content">
                <h2>{id}</h2>
         
        <div key={id}className='portfolio_item'>
          <div className='portfolio_item_img'>
            
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className='portfolio_item-cta'>
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary'>Live Demo</a>
          </div>
        </div>
         
            </div>
        </div>
        
    </div>
     )
    })}
    </div>
    </section>
  )
}

export default Portfolio
