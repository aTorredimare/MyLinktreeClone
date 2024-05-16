import { backgrounds } from '../assets/resources';


function GymCounter() {
    return (
        <div className={`w-full h-screen ${backgrounds.container} flex justify-start`}>
            <div className='max-w-2xl mx-auto mt-64 flex flex-col gap-4'>
                <h1> COMING SOON!</h1>
            </div>
        </div>

    )
}

export { GymCounter }