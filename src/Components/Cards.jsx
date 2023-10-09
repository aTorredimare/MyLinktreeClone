import cv from '../assets/CV_agg_20231009.pdf';

function MyCard(props) {
    return (
        <a href={props.link} target="_blank">
            <div className={`w-96 mx-auto ${props.background} flex flex-row gap-5 items-center justify-center rounded-xl py-3 border-2 border-black shadow-card hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}>
                {props.icon}
                <h3 className='text-center text-x1 font-bold'>{props.name}</h3>
                {props.icon}
            </div>
        </a>
    );

}

function MyCardWithDownload(props) {
    const onCardClick = () => {
        fetch(cv).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CV_Andrea_Torredimare.pdf';
                alink.click();
            })
        })
    }

    return (
        <div onClick={onCardClick} className='hover:cursor-pointer'>
            <div className={`w-96 mx-auto ${props.background} flex flex-row gap-5 items-center justify-center rounded-xl py-3 border-2 border-black shadow-card hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}>
                {props.icon}
                <h3 className='text-center text-x1 font-bold'>{props.name}</h3>
                {props.icon}
            </div>
        </div>
    );

}

export { MyCard, MyCardWithDownload }