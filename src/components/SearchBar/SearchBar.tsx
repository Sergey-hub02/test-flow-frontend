import { useState } from 'react'
import SearchModal from '@/components/SearchModal/SearchModal'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './SearchBar.scss'

const SearchBar = () => {
    const [show, setShow] = useState(false)

    const showSearchModal = () => setShow(true)
    const hideSearchModal = () => setShow(false)

    return (
        <>
            <div className="d-flex align-items-center border rounded py-2 px-3 w-100 search-bar" onClick={showSearchModal}>
                <div>
                    <i className="bi bi-search"></i>
                </div>

                <div className="fs-7 ps-2">Поиск</div>
            </div>

            <SearchModal
                show={show}
                onHide={hideSearchModal}
            />
        </>
    )
}

export default SearchBar;
