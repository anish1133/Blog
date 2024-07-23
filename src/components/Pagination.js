import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {

    const {page, handlePageChange,totalPages} = useContext(AppContext);
    return(
        <div className="fixed bottom-0 bg-white  w-[100vw] border-4 flex justify-center items-center left-0 ">
            <div className=" flex justify-between w-[100vw] max-w-[680px] py-3 ">
                <div className="flex gap-x-1">
                { page > 1 && (
                    <button 
                    className="rounded-md border px-3.5 py-1  "
                     onClick={ () => handlePageChange(page-1)}>
                        Previous
                    </button>)
                }

                { page < totalPages &&
                    (<button 
                     className="rounded-md border px-3.5 py-1  "
                    onClick={()=> handlePageChange(page+1)}>
                        Next
                    </button>)
                }
                </div>               
               
                <p className=" font-bold text-sm">
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    )
}

export default Pagination;