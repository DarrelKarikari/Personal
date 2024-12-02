import React, {useState} from "react";

const EducationTab = () => {
    const [showCourses, setShowCourses] = useState(false);

    const toggleCourses = () =>{
        setShowCourses(!showCourses);
    };

    return(
        <div className="education-tab overflow-auto">
            <div className="educatio-details text-[#283a4d]">
                <p><strong>Wilfrid Laurier University, Waterloo ON</strong></p>
                <p>B.Sc in Computer Science, 2022 - 2026</p>
                <p>Concentration: Big Data Systems | Minor: Criminology</p>
                <p>GPA : 9.0/12.0</p>
            </div>
        </div>
    );
};

export default EducationTab;