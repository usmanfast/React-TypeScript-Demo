import * as React from "react";

export class HelloWorld extends React.Component<any>{

    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Hello world {this.props.text}</h1>
             </div> 
           
          );

    }
}

export default HelloWorld;