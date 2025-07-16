import { NavigateFunction } from 'react-router-dom'

export const navigateToContact = (navigate: NavigateFunction, currentPath: string) => {
  if (currentPath === '/') {
    // If already on home page, just scroll to contact
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    // Navigate to home page first, then scroll to contact
    navigate('/')
    // Wait for navigation to complete before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }
}