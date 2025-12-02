import React from "react";

const Loading = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="py-4 text-center text-gray-500">
      Loading...
    </div>
    )
})

export default Loading;