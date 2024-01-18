'use client'

import { Widget } from '@typeform/embed-react'
import { SimpleLayout } from './SimpleLayout'

export default function Contact() {
  return (
    <SimpleLayout title="Let’s talk about your project">
      <div className="mx-auto mt-8 overflow-hidden rounded-3xl ring-1 ring-gray-900/10">
        <Widget id="j9W549x2" style={{ height: '590px', overflow: 'hidden' }} inlineOnMobile />
      </div>
    </SimpleLayout>
  )
}
