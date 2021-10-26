import React from "react";
import { connect } from "react-redux";

const Sponsors = ({ loading }) => {
    return (
        <>
            {loading ? <div className="section_sponsors"></div> :
                <div className="section_sponsors">
                    <h2>
                        Sponsori
                    </h2>
                    <hr />
                    <img src="/media/uploads/sponsors.png" alt="" />
                </div>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.loading.loading
    }
}

export default connect(mapStateToProps, null)(Sponsors)