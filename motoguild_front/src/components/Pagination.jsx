import ReactPaginate from "react-paginate"

export default function Pagination(params)
{

    
    function handlePageClick(data)
    {  
        let currentPage = data.selected + 1
        params.setCurrentPage(currentPage)
    }

    return (
        <div>
            <ReactPaginate 
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
                pageCount={params.pagination["TotalPages"]}
                marginPagesDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </div>
    )
}