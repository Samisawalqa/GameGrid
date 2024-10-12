export default function ({ label, id, type, options }) {
    return <div className="mb-3">
        <label htmlFor={id} className="form-label">{label}</label>
        {options ? <select className="form-control" name={id} id={id}>
            {options.map((option) =>
                <option>{option}</option>
            )}
        </select> : <input type={type} name={id} className="form-control" id={id} required />}
    </div>
}