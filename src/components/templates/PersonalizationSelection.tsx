"use client"

export default function PersonalizationSelection({setPersonalization}: {setPersonalization?: (value: boolean) => void}) {
  setPersonalization?.(true)  
  return (<div>Personalization Selection</div>)
}
