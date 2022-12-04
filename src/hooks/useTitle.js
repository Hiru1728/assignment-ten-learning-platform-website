import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Learning course Website`;
    }, [title])
};

export default useTitle;