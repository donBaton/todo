import React, {useState} from 'react';
import Storage from "../repo/Storage";

const Counter = () => {
    const [count] = useState(Storage.get('todos')?.length || 0)
    return (
        <div className="row">
            <div className="text-end">{count} task{count===1?'':"s"} in total</div>
        </div>
    );
}

export default Counter