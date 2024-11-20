const PageHeader = ({ title }) => {
    return (
        <div className="text-center mb-5">
            <h1 className='capitalize fw-bold'>
                {title}
            </h1>
        </div>
    )
}

export default PageHeader