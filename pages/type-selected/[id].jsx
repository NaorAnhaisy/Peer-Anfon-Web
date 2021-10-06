import { useRouter } from 'next/router'

export default function TypeSelected() {
    const router = useRouter()
    const { id } = router.query
  
    return (
        <h1>Type Selected with id: {id}</h1>
    )
}