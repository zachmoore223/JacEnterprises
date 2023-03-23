import React, { useState, useEffect} from "react";

export default function User(){
  const [departments, setDepartments] = useState([])
useEffect(() => {
        const periodicallyFetch = setInterval(
           () => fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments")
                      .then(res => res.json())
                      .then(response => setDepartments(response.departments)),
           1000);
        return () => clearInterval(periodicallyFetch)
    }, [])

    return(
    <div>
        {departments.map(department => (<li key={department.departmentId}>
                                            Hello {department.displayName}
                                       </li>))}
    </div>
);
}

//{departments.map(department => (<li key={department.departments}> Hello {department.displayName}</li>))}