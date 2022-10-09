import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addErrands } from '../../store/modules/errands/errandsSlice'

export default function Errands() {
    const dispatch = useDispatch()
    const [description, setDescription] = useState('')
    const [details, setDetails] = useState('')
    
    const addErrands = (event) => {
        event.preventDefault()

        dispatch(addErrands({
            uid: 1,
            errandsDescription: description,
            errandsDetails: details
        }))
    }
    return(
        <>

        </>
    )
}