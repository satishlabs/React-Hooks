import { useEffect, useState } from "react"

const MyCourse = (props) => {
    const [courseState, setCoursesState] = useState({
        trainerName: "Srinivas Dande",
        trainerEmail: "sri@gmail.com",
        mycourseList: [
            { cid: 101, cname: "Angular 7", price: 15000 },
            { cid: 102, cname: "React JS", price: 15000 },
            { cid: 103, cname: "Java Full Stack", price: 36000 },
            { cid: 104, cname: "Spring MicroServices", price: 22000 },
            { cid: 105, cname: "DevOps", price: 15000 },
        ],
    });

    useEffect(()=>{
        console.log("[MyCourse] -1st useEffect()");
         //Do Initilization
        //Http calls
        return () =>{
            console.log("[MyCourse] -1st Cleanup - useEffect()");
        }
    });
    useEffect(()=>{
        console.log("[MyCourse] -2nd useEffect()");
         //Do Initilization
        //Http calls
        return () =>{
            console.log("[MyCourse] -2nd Cleanup - useEffect()");
        }
    },[]);
    useEffect(()=>{
        console.log("[MyCourse] -3rd useEffect()");
         //Do Initilization
        //Http calls
        return () =>{
            console.log("[MyCourse] -3rd Cleanup - useEffect()");
        }
    });

    const showAllCourses = () => {
        console.log("showAllCourses - Called");

        setCoursesState({
            mycourseList: [
                { cid: 101, cname: "Angular 7", price: 12000 },
                { cid: 102, cname: "React JS", price: 12000 },
                { cid: 104, cname: "Spring MicroServices", price: 15000 },

            ],
        });
    };
    let courseListToDisplay = courseState.mycourseList.map(
        (mycourse, myindex) => (
            <tr key={myindex}>
                <td><h6>{mycourse.cid}</h6></td>
                <td><h6>{mycourse.cname}</h6></td>
                <td><h6>{mycourse.price}</h6></td>
            </tr>
        )
    )
    return (
        <div>
            <button className="btn btn-primary" onClick={showAllCourses}>Show All Courses</button>

            <div className="container">
                <table className="table table table-striped table-light table-bordered">
                    <tbody>{courseListToDisplay}</tbody>
                </table>
                <br />
                <h2>TrainerName: {courseState.trainerName}</h2>
                <h2>TrainerEmail: {courseState.trainerEmail}</h2>
            </div>
        </div>
    );
}
export default MyCourse;