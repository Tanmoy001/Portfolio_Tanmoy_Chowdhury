import React from 'react'
import './Portfolio.css'
import cover_one from '../../assets/neibour.png'
import cover_two from '../../assets/lifeargan.png'
import cover_three from '../../assets/decentra.png'

import cover_four from '../../assets/coincom.png'

const Portfolio = () => {

  const data = [
    {
      id: 1,

      title: 'NEIghborING',
      description: 'where you can get to know about food attraction weather around you',
      github: 'https://github.com/Tanmoy001/NEIghborING',
      demo: 'https://neighboring.netlify.app/',
      pic:cover_one

    },
    {
      id: 2,
      title: 'LiveArgar',
      description: 'In LiveARgan you can see the organs with your surrounding visualization.',
      github: 'https://github.com/Tanmoy001/LifeARgan',
      pic:cover_two
      // demo: 'https://coincom.netlify.app/'
    },
    {
      id: 3,
      title: 'Decentralized Cloud Storage',
      description: 'This is a file storage system with the help of blockchain and pinata.',
      github: 'https://github.com/Tanmoy001/Decentralize-file-Storage',
      demo: 'https://decentralized-storage-system.netlify.app/',
      pic:cover_three

    },
    {
      id: 4,
      title: 'CoinCom',
      description: 'CoinCom will give you update about your digital coin and shares',
      github: 'https://github.com/Tanmoy001/coinstatus',
      demo: 'https://coincom.netlify.app/',
      pic:cover_four
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

<div className='protfolio_container'>
      <div className='portfolio_content'>
        {data.map(({ id, description, title, github, demo,pic }) => {
          return (
            <div key={id} className="container">
              <div className="drop">  
              <div className='image'> <img src={pic} id="project_img" alt='' /></div>
                <div className="content">
                  <h2>{id}</h2>
                  <h3 style={{ fontfamily: 'math' }}>{title}</h3>
                  <p style={{ fontFamily: 'italic' }}>{description}</p>
                  <div className='portfolio_item-cta'>
                    <a target={'_blank'} rel="noreferrer" href={github} className='btn' style={{ border: 'none', fontWeight: '600', fontFamily: 'cursive' }}>Github</a>
                    <a target={'_blank'} rel="noreferrer" href={demo} className='btn btn-primary' style={{ border: 'none', fontWeight: '600', fontFamily: 'cursive' }}>Live Demo</a>
                  </div>
                </div>

              </div>
            </div>

          )
        })}
      </div>
      </div>
    </section>
  )
}

export default Portfolio
