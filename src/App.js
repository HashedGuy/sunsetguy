import { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {AiOutlineCopy} from 'react-icons/ai'

import homeScreen from './assets/homeScreen.png'
import exploreScreen from './assets/exploreScreen.png'
import unitSelection from './assets/unitSelection.png'
import stationSelection from './assets/stationSelection.png'

import sibPortrait from './assets/sibPortrait.png'
import sibLandscape from './assets/sibLandscape.png'
import metaLandscape from './assets/metaPortrait.png'
import metaPortrait from './assets/metaProblem.png'

function App() {
  const [infoBox, setInfoBox] = useState('')
  const [appCategory, setAppCategory] = useState('')
  const [app, setApp] = useState('')
  const [stack, setStack] = useState('')
  
  
  // Color for active texts
  const styles = {
    color: 'aqua'
  }

  const handleInfoBox = (boxName) => {
    setInfoBox(boxName)
    setAppCategory('')
    setStack('')
    setApp('')
  }

 

  return (
    <>
    <div className="App">
      <div className="menuSection">
        <h1><a onClick={()=>handleInfoBox('')}>Hello, Arbus here!</a></h1>
        <ul className="ulMenu">
          <li><a onClick={()=>handleInfoBox('aboutMe')} style={infoBox==='aboutMe' ? styles : {}}>About me</a></li>
          <li><a onClick={()=>handleInfoBox('projects')} style={infoBox==='projects' ? styles : {}}>Projects</a></li>
          <li><a onClick={()=>handleInfoBox('techStack')} style={infoBox==='techStack' ? styles : {}}>Tech-stack</a></li>
          {/* <li><a onClick={()=>handleInfoBox('blog')} style={infoBox==='blog' ? styles : {}}>Blog</a></li> */}
          <li><a onClick={()=>handleInfoBox('contact')} style={infoBox==='contact' ? styles : {}}>Contact</a></li>
        </ul>
      </div>
      {infoBox ? 
        <div className="infoBox">
          {infoBox==='aboutMe' ? 
            <>
              <h2>About me</h2> 
              <ul>
                <li>Living his late 20s</li>
                <li>Curiosity over compliance</li>
                <li>Attitude over professionalism</li>
                <li>Harmony, harmony, harmony...</li>
              </ul>
            </>:
            infoBox==='projects' ? 
            <>
              <h2>Projects*</h2>
              <p className="includesText">*It includes only the projects entirely done by me:</p>
              <ul>
                <li><a onClick={()=>setAppCategory('webApp')} style={appCategory==='webApp' ? styles : {}}>Web app</a></li>
                  {appCategory === 'webApp' ? 
                  <ul>
                    <li><a onClick={()=>setApp('sib')} target='_blank' style={app==='sib' ? styles : {}}>SpaceInBrowser</a></li>
                    {app==='sib' ? 
                    <>
                        <p className="businessDescription">SIB brings virtual space travel to your browser in 3D format.</p>
                        <p className="businessDescription"><span className="techStack">Tech-stack:</span> React, ThreeJS (WebGL), OSM </p>
                        <p className="businessDescription"><span className="launches">Launches:</span> <a href="https://news.ycombinator.com/item?id=31204353" target='_blank'>HackerNews</a>, <a href="https://www.producthunt.com/products/spaceinbrowser" target='https://www.producthunt.com/products/spaceinbrowser'>ProductHunt</a>, <a href="https://github.com/HashedGuy/SpaceInBrowser_stable" target='_blank'>GitHub</a> </p>
                    </> : ''}
                
                    <li><a onClick={()=>setApp('metavists')} target='_blank' style={app==='metavists' ? styles : {}}>Metavists (in progress)</a></li>
                    {app==='metavists' ? 
                    <>
                        <p className="businessDescription">Metavists...coming soon.</p>
                        <p className="businessDescription"><span className="techStack">Tech-stack:</span> React</p>
                        <p className="businessDescription"><span className="techStack"><a href="https://metavists.netlify.app/">Demo version</a></span></p>
                        
                    </> : ''}
                    <li><a onClick={()=>setApp('nft')} style={app==='nft' ? styles : {}}>NFT Land Map</a></li>
                    {app==='nft' ? 
                    <>
                          <p className="warningText">Due to the agreement made with the client, to have an access to the project email me.</p>
                    </> : ''}
                    
                  </ul> 
                  : ''}
                <li><a onClick={()=>setAppCategory('nativeApp')} style={appCategory==='nativeApp' ? styles : {}}>Native app</a></li>
                {appCategory === 'nativeApp' ? 
                  <ul>
                    <li><a onClick={()=>setApp('liveEasy')} style={app==='liveEasy' ? styles : {}}>LiveEasy App</a></li>
                    {app==='liveEasy' ? 
                    <>
                      <p className="businessDescription">LiveEasy is an indie business providing a self-storage service via its extended marketplace. The whole business is operated by me and my partner - Vanessa. You can book your storage either via the website or the app.</p>
                      <p className="businessDescription"><span className="techStack">Tech-stack:</span> React-Native, Firebase, GraphQL+Apollo</p>
                    </> : ''}
             
                  </ul>
                   : ''}
              </ul>
            </> 
            :
            infoBox==='techStack' ? 
            <>
            <h2>Tech-stack</h2>
            <ul>
              <li><a onClick={()=>setStack('fe')} style={stack==='fe' ? styles : {}}>Front End</a></li>
              {stack==='fe' ? 
                <ul>
                  <li>JavaScript</li>
                  <li>ReactJS</li>
                  <li>Reack-native</li>
                  <li>WebGL (Three.js)</li>
                </ul>
              : ''}
              <li><a onClick={()=>setStack('be')} style={stack==='be' ? styles : {}}>Back End</a></li>
              {stack==='be' ? 
                <ul>
                  <li>Node.js</li>
                  <li>GraphQL</li>
                  <li>Apollo</li>
                </ul>
              : ''}
            </ul>
            </>
            :
            infoBox==='blog' ? 
            <h2>Blog</h2> :
            infoBox==='contact' ? 
            <>
            <h2>Contact</h2>
            <ul>
              <li>
                
                <a href="mailto:arbus@multiplanetary.website" title='arbus@multiplanetary.website'>Email</a>
                <CopyToClipboard text="arbus@multiplanetary.website"><AiOutlineCopy className="reactIcon" title="Copy email"/></CopyToClipboard>
              </li>
              
              <li><a href="https://github.com/HashedGuy" target='_blank'>GitHub</a></li>
              <li><a href="https://news.ycombinator.com/user?id=cryptography" target='_blank'>HackerNews</a></li>
              <li><a href="https://twitter.com/curiousB_ing" target='_blank'>Twitter</a></li>
            </ul>
            </>
          : ''}
          
        </div> 
      : ''}
    </div>
   
  
    </>
  );
}

export default App;
