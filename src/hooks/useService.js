import React, { useEffect, useState } from 'react';

function useService(props) {
    const [service, setService] = useState([]);

    useEffect(()=>{
        fetch('/data/service.json').then(res => res.json())
        .then(data => setService(data));
    },[])
    

    return {service, setService};
}

export default useService;