const NoDataAvailableMessage = ({ text }) => {
    return (
        <div className="text-center py-5">
            <h1 className="fw-bold">
                Trenutno nema postavljenih {text}
            </h1>
            <h3 className="text-muted fw-bold">
                Molimo Vas dođite nam kasnije
            </h3>
        </div>
    )
}

export default NoDataAvailableMessage