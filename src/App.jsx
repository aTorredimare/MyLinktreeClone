import profPic from './assets/picture.jpg'
import './App.css'
import { MyCard, MyCardWithDownload } from './Components/Cards'
import {Bio} from './Components/Bio'
import {icons, backgrounds} from './assets/resources'

function App() {
  return (
    <div className={`w-full h-screen ${backgrounds.container} flex justify-start`}>
      <div className='max-w-2xl mx-auto flex flex-col gap-4'>
        <div className='h-48 w-48 mx-auto mt-24'>
          <div className='aspect-w-1 aspect-h-1'>
            <img src={profPic} className='rounded-full object-cover object-center shadow-pic'/>
          </div>
        </div>

        <Bio />
        <div className='pt-12 mx-auto flex flex-col gap-8'>
          <MyCard link={"https://github.com/aTorredimare"} background={backgrounds.card} name={"GitHub"} icon={icons.github} />
          <MyCard link={"https://www.linkedin.com/in/andrea-torredimare-80976b184/"} background={backgrounds.card} name={"LinkedIn"} icon={icons.linkedin} />
          <MyCardWithDownload link={"#"} background={backgrounds.card} name={"My CV"} icon={icons.cv} />

        </div>
      </div>

    </div>
  )
}

export default App
