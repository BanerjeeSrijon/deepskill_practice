import React from "react";
import styles from "./CohortDetails.module.css";

const CohortDetails = ({ cohort }) => {
    // Determine title color based on status
    const titleStyle = {
        color: cohort.status === "ongoing" ? "green" : "blue",
    };

    return (
        <div className={styles.box}>
            <h3 style={titleStyle}>{cohort.name}</h3>
            <dl>
                <dt>Start Date:</dt>
                <dd>{cohort.startDate}</dd>

                <dt>End Date:</dt>
                <dd>{cohort.endDate}</dd>

                <dt>Participants:</dt>
                <dd>{cohort.participants}</dd>

                <dt>Status:</dt>
                <dd>{cohort.status}</dd>
            </dl>
        </div>
    );
};

export default CohortDetails;
