import CountUp from 'react-countup';


const CounterBox = ({ value, text }) => {
    return (
        <div className="col-4">
            <h3 className='fw-bold'>
                <CountUp end={value} duration={4} />+
            </h3>
            <p className='fw-bold text-muted'>
                {text}
            </p>
        </div>
    )
}

export default CounterBox