import { useState, useEffect, useContext, type ChangeEvent, type SubmitEvent } from 'react'
import { Form, Card, Image, Button } from 'react-bootstrap'
import { MAX_FILE_UPLOAD_SIZE } from '@/constants'
import { AuthContext } from '@/contexts/AuthContext'
import userStubImage from '@/assets/user-stub.svg'

const ImageUploader = () => {
    const { user: userShort } = useContext(AuthContext)
    const [image, setImage] = useState(userStubImage)
    const [photo, setPhoto] = useState<File>()
    const [errors, setErrors] = useState([] as string[])

    useEffect(() => {
        return () => {
            if (image && image.startsWith('blob:')) {
                URL.revokeObjectURL(image)
            }
        }
    }, [image])

    const handleImageUpload = (event: ChangeEvent) => {
        const files = (event.target as HTMLInputElement).files

        if (!files) {
            setErrors(['Не удалось получить загруженное изображение!'])
            return;
        }

        const file = files[0]
        const type = file.type;
        const size = file.size;

        const validationErrors: string[] = []

        if (!type.includes('image')) {
            validationErrors.push('Допустимые форматы изображений: .jpg, .jpeg, .png')
        }

        if (size > MAX_FILE_UPLOAD_SIZE) {
            validationErrors.push('Допускается загрузка изображений размером не более 3 Мб')
        }

        if (validationErrors.length > 0) {
            setErrors(validationErrors)
            return;
        }

        const url = URL.createObjectURL(file)

        setImage(url)
        setPhoto(file)
        setErrors([])
    }

    const handlePhotoUpdate = async (event: SubmitEvent) => {
        event.preventDefault()

        if (!photo) {
            setErrors(['Не выбрано изображение!'])
            return
        }

        const formData = new FormData()
        formData.append('photo', photo)

        const response = await fetch(`/api/v1/users/${userShort.guid}/photo`, {
            method: 'PATCH',
            body: formData,
        })

        const body = await response.json()

        if (!response.ok) {
            setErrors([body.error])
            return
        }

        setErrors([])
        window.location.reload()
    }

    return (
        <Form className="border rounded py-3 px-4" encType="multipart/form-data" method="post" onSubmit={handlePhotoUpdate}>
            <Form.Group className="mb-4">
                <h4>Загрузка изображения</h4>
            </Form.Group>

            <Form.Group className="mb-3">
                <Card className="w-100 overflow-hidden photo-preview-container">
                    <Image
                        src={image}
                        alt="Предварительный просмотр"
                        className="rounded-circle photo-preview"
                    />
                </Card>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="photo" className="mb-1">Фотография</Form.Label>

                <Form.Control
                    id="photo"
                    name="photo"
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleImageUpload}
                />

                <Form.Text className="text-danger">
                    {errors.map((error, index) => {
                        return <div key={index}>{error}</div>
                    })}
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Button type="submit" variant="success">
                    Загрузить
                </Button>
            </Form.Group>
        </Form>
    )
}

export default ImageUploader
