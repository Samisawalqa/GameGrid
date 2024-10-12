import MDB from "./MDB";

export default function ({ label, value, id, userid, ...props }) {

    return <div className="item border-bottom py-3">
        <div className="row justify-content-between align-items-center">
            <div className="col-auto">
                <div className="item-label mb-2"><strong>{label}</strong></div>
                <div className="item-data">{value}</div>
            </div>{/*//col*/}
            <div className="col text-end">
                {/* <a className="btn-sm app-btn-secondary" href="#">Change</a> */}
                <MDB userid={userid} id={id} label={label} {...props} />
            </div>{/*//col*/}
        </div>{/*//row*/}
    </div>
}