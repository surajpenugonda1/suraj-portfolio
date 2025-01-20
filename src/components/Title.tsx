interface TitleProps {
    text: string;
}

function Title ({text}: TitleProps) {
    return <p  className='typewriter text-2xl text-center inline' key={text} > {text} </p>
}

export default Title;