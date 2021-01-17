
import { useEffect } from 'react';
import Error from "./Error";

export default function Details(props) {
    useEffect(() => {
        props.setResourceId(props.resourceId);
        props.setSelectedResource(props.selectedResource);
    }, [])

    return (
        <div>
            {
                    props.error ?
                   <Error />:
                    ''
                }
            
          {
            Object.keys(props.result).map((key, i) => (
              <p key={i}>
                <span className="mr-3"><strong>{key}:</strong></span>
                <span>{props.result[key]}</span>
              </p>
            ))
          }
        </div>
      )

}