import { Modal, type ModalProps } from 'react-bootstrap';
import Select from 'react-select'

const options = [
    { value: 'discipline-1', label: 'Дисциплина 1' },
    { value: 'discipline-2', label: 'Дисциплина 2' },
    { value: 'discipline-3', label: 'Дисциплина 3' },
]

const SearchModal = (props: ModalProps) => {
    return (
        <Modal
            {...props}
            size="lg"
            animation={false}
            aria-labelledby="search-modal"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="search-modal">Поиск по дисциплинам</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Select
                    options={options}
                    placeholder="Введите наименование дисциплины"
                />
            </Modal.Body>
        </Modal>
    )
}

export default SearchModal;
