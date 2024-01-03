import { useEffect, useState } from 'react'

export const useScrollPosition = () =>{
    const [scrollPosition,setScrollPosition] = useState(0)
    
    const updatePosition = () => setScrollPosition(window.scrollY)
    
    useEffect(()=>{
        window.addEventListener('scroll',updatePosition)
        }, [])

        return scrollPosition
    }
